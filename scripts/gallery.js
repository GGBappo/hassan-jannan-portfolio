(function () {
  function isVideo(item) { return item.type === 'video' || /\.mp4(?:[?#]|$)/i.test(item.src || ''); }
  function stopMedia(container) {
    container.querySelectorAll('video').forEach(function (video) {
      video.pause();
      video.removeAttribute('src');
      video.load();
    });
    container.replaceChildren();
  }
  function render(items) {
    const media = items.filter(function (item) { return !item.caseStudyHidden; });
    const grid = document.getElementById('project-media-grid');
    const dialog = document.getElementById('media-viewer');
    const stage = document.getElementById('media-viewer-stage');
    const previous = document.getElementById('media-viewer-prev');
    const next = document.getElementById('media-viewer-next');
    const galleryPrevious = document.getElementById('gallery-prev');
    const galleryNext = document.getElementById('gallery-next');
    const pause = document.getElementById('gallery-pause');
    let current = 0, active = 0, trigger, oldOverflow, inView = false, frame;
    let paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('project-gallery-section').hidden = media.length === 0;
    const previews = [];
    media.forEach(function (item, index) {
      const card = document.createElement('figure');
      card.className = 'media-card';
      const button = document.createElement('button');
      button.className = 'media-enlarge';
      button.type = 'button';
      button.dataset.mediaIndex = index;
      button.setAttribute('aria-label', 'Enlarge ' + (item.alt || 'project media'));
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('aria-controls', 'media-viewer');
      const preview = document.createElement(isVideo(item) ? 'video' : 'img');
      if (isVideo(item)) {
        preview.poster = item.poster || '';
        preview.preload = 'none';
        preview.muted = true;
        preview.loop = true;
        preview.playsInline = true;
        preview.dataset.src = item.src;
        preview.setAttribute('aria-hidden', 'true');
        previews[index] = preview;
      } else {
        preview.src = item.src;
        preview.alt = item.alt || 'Project image';
        preview.loading = 'lazy';
      }
      button.append(preview);
      const label = document.createElement('span');
      label.className = 'media-enlarge-label';
      label.setAttribute('aria-hidden', 'true');
      label.textContent = '⤢ Enlarge';
      button.append(label);
      card.append(button);
      if (item.caption) {
        const caption = document.createElement('figcaption');
        caption.textContent = item.caption;
        card.append(caption);
      }
      if (item.href && item.linkLabel) {
        const link = document.createElement('a');
        link.className = 'media-caption-link';
        link.href = item.href;
        link.textContent = item.linkLabel;
        link.target = '_blank';
        link.rel = 'noreferrer';
        card.append(link);
      }
      grid.append(card);
    });
    function syncPlayback() {
      previews.forEach(function (video, index) {
        if (index === active && inView && !paused && !dialog.open && !document.hidden) {
          if (!video.getAttribute('src')) video.src = video.dataset.src;
          video.play().catch(function () { /* The poster remains visible if autoplay is unavailable. */ });
        } else video.pause();
      });
    }
    function syncScroll() {
      const bounds = grid.getBoundingClientRect();
      let widest = -1;
      Array.from(grid.children).forEach(function (card, index) {
        const box = card.getBoundingClientRect();
        const visible = Math.max(0, Math.min(box.right, bounds.right) - Math.max(box.left, bounds.left));
        if (visible > widest + 1) { widest = visible; active = index; }
      });
      galleryPrevious.disabled = grid.scrollLeft <= 2;
      galleryNext.disabled = grid.scrollLeft >= grid.scrollWidth - grid.clientWidth - 2;
      document.getElementById('gallery-status').textContent = (active + 1) + ' / ' + media.length;
      syncPlayback();
    }
    function scrollByCard(direction) {
      const step = grid.children[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(grid).gap) || 0);
      grid.scrollBy({left: direction * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
    }
    galleryPrevious.addEventListener('click', function () { scrollByCard(-1); });
    galleryNext.addEventListener('click', function () { scrollByCard(1); });
    grid.addEventListener('scroll', function () { cancelAnimationFrame(frame); frame = requestAnimationFrame(syncScroll); }, {passive:true});
    grid.addEventListener('keydown', function (event) {
      if (event.target !== grid) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault(); scrollByCard(event.key === 'ArrowRight' ? 1 : -1);
      }
    });
    function syncPause() { pause.textContent = paused ? 'Play previews' : 'Pause previews'; }
    pause.hidden = !media.some(isVideo);
    syncPause();
    pause.addEventListener('click', function () { paused = !paused; syncPause(); syncPlayback(); });
    new IntersectionObserver(function (entries) { inView = entries[0].isIntersecting; syncPlayback(); }, {threshold:.2}).observe(grid);
    window.addEventListener('resize', syncScroll);
    function show(index) {
      current = index;
      const item = media[current];
      stopMedia(stage);
      stage.setAttribute('aria-busy', 'true');
      stage.dataset.state = 'loading';
      document.getElementById('media-viewer-caption').textContent = item.caption || item.alt || '';
      document.getElementById('media-viewer-status').textContent = (current + 1) + ' / ' + media.length;
      previous.disabled = current === 0;
      next.disabled = current === media.length - 1;
      const node = document.createElement(isVideo(item) ? 'video' : 'img');
      node.id = 'media-viewer-media';
      function ready() { if (node.parentNode === stage) { stage.setAttribute('aria-busy', 'false'); stage.dataset.state = 'ready'; } }
      node.addEventListener('error', function () {
        if (node.parentNode !== stage) return;
        stage.setAttribute('aria-busy','false');
        stage.dataset.state = 'error';
        const message = document.createElement('p');
        message.textContent = 'This media could not load. Please try another item or reopen it.';
        stage.replaceChildren(message);
      });
      if (isVideo(item)) {
        node.controls = true; node.muted = true; node.loop = true; node.playsInline = true; node.autoplay = true;
        node.preload = 'auto'; node.poster = item.poster || '';
        node.setAttribute('aria-label', item.alt || 'Project clip');
        node.addEventListener('loadeddata', ready, {once:true});
      } else {
        node.alt = item.alt || 'Project image';
        node.addEventListener('load', ready, {once:true});
      }
      stage.append(node);
      node.src = item.fullSrc || item.src;
    }
    grid.addEventListener('click', function (event) {
      const button = event.target.closest('.media-enlarge');
      if (!button) return;
      trigger = button;
      oldOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      syncPlayback();
      show(Number(button.dataset.mediaIndex));
    });
    previous.addEventListener('click', function () { if (current > 0) show(current - 1); });
    next.addEventListener('click', function () { if (current < media.length - 1) show(current + 1); });
    document.getElementById('media-viewer-close').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('keydown', function (event) {
      if (event.target.tagName === 'VIDEO') return;
      if (event.key === 'ArrowLeft' && current > 0) { event.preventDefault(); show(current - 1); }
      if (event.key === 'ArrowRight' && current < media.length - 1) { event.preventDefault(); show(current + 1); }
    });
    dialog.addEventListener('close', function () {
      stopMedia(stage);
      document.body.style.overflow = oldOverflow || '';
      if (trigger) trigger.focus({preventScroll:true});
      syncPlayback();
    });
    document.addEventListener('visibilitychange', function () {
      syncPlayback();
      const video = stage.querySelector('video');
      if (video && document.hidden) video.pause();
    });
    syncScroll();
  }
  window.ProjectGallery = {render:render};
})();
