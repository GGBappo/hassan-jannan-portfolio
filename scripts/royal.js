(function () {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let saved;
  try { saved = localStorage.getItem('hj-motion'); } catch (_) {}
  let reduced = saved ? saved === 'reduced' : preference.matches;
  let animation, travelTimer, footerVisible = false, position = 0, cursorFrame;
  root.dataset.motion = reduced ? 'reduced' : 'full';
  window.PortfolioMotion = { get reduced() { return reduced; } };

  const background = document.createElement('div');
  background.className = 'royal-ambient'; background.setAttribute('aria-hidden', 'true');
  background.innerHTML = '<i class="ambient-cut cut-one"></i><i class="ambient-cut cut-two"></i><i class="ambient-dots"></i>';
  document.body.prepend(background);
  document.querySelectorAll('.brand-mark').forEach(function (mark) {
    mark.classList.add('hj-emblem');
    mark.style.backgroundImage = 'url("assets/hj-mask.svg")';
  });
  const toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'motion-toggle';
  toggle.setAttribute('aria-label', 'Reduce motion');
  document.body.append(toggle);

  const footer = document.createElement('footer');
  footer.className = 'night-route';
  footer.setAttribute('aria-label', 'Hassan Jannan night route');
  footer.innerHTML = '<div class="route-caption"><span>THE NEXT STOP</span><strong>Keep learning. Keep building.</strong><span class="route-signature">HJ / AFTER HOURS</span></div><div class="tunnel-scene"><div class="tunnel-ribs" aria-hidden="true"></div><div class="tunnel-haze" aria-hidden="true"></div><div class="tunnel-tracks" aria-hidden="true"></div><button class="night-car" type="button" aria-label="Discover a message from Hassan"><img src="assets/night-runner.svg" alt=""><span class="car-shadow" aria-hidden="true"></span></button></div><p class="car-message" role="status" hidden>A little curiosity goes a long way. Thanks for exploring my work. — Hassan</p><div class="route-bottom"><a href="index.html#hero">↑ Back to the top</a><span>Hassan Jannan / Game Developer</span><span>Persona 5 Royal inspired · Original portfolio artwork</span></div>';
  document.body.append(footer);
  const car = footer.querySelector('.night-car');
  const scene = footer.querySelector('.tunnel-scene');
  car.addEventListener('click', function () {
    const message = footer.querySelector('.car-message');
    message.hidden = !message.hidden;
  });
  function stopCar() {
    clearTimeout(travelTimer);
    if (animation) animation.pause();
  }
  function drive() {
    if (reduced || !footerVisible || document.hidden) return;
    if (animation && animation.playState === 'paused') { animation.play(); return; }
    const max = Math.max(0, scene.clientWidth - car.offsetWidth - 16);
    const destination = 16 + Math.random() * Math.max(0, max - 16);
    car.classList.toggle('facing-left', destination < position);
    const duration = 3000 + Math.abs(destination - position) * 13;
    animation = car.animate([{ transform:'translateX(' + position + 'px)' }, { transform:'translateX(' + destination + 'px)' }], { duration:duration, easing:'cubic-bezier(.35,0,.35,1)', fill:'forwards' });
    position = destination;
    animation.onfinish = function () { animation = null; travelTimer = setTimeout(drive, 1200 + Math.random() * 2800); };
  }
  car.addEventListener('pointerenter', stopCar);
  car.addEventListener('pointerleave', drive);
  new IntersectionObserver(function (entries) {
    footerVisible = entries[0].isIntersecting;
    if (footerVisible) drive(); else stopCar();
  }, {threshold:.08}).observe(footer);

  const cursor = document.createElement('div');
  cursor.className = 'mask-follower'; cursor.setAttribute('aria-hidden','true');
  cursor.innerHTML = '<img src="assets/hj-mask.svg" alt="">';
  document.body.append(cursor);
  let x = 0, y = 0, tx = 0, ty = 0, cursorTimer;
  const finePointer = window.matchMedia('(pointer: fine)');
  function follow() {
    if (reduced || !finePointer.matches || document.hidden) { cursorFrame = null; return; }
    const dx = tx - x, dy = ty - y;
    x += dx * .18; y += dy * .18;
    cursor.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) rotate(' + Math.max(-18,Math.min(18,dx*.3)) + 'deg)';
    if (Math.abs(dx) + Math.abs(dy) > .15) cursorFrame = requestAnimationFrame(follow);
    else cursorFrame = null;
  }
  document.addEventListener('pointermove', function (event) {
    if (reduced || !finePointer.matches || document.querySelector('dialog[open]')) { cursor.classList.remove('visible'); return; }
    const editing = event.target.closest('input,textarea,[contenteditable="true"]');
    if (editing) { cursor.classList.remove('visible'); return; }
    tx = Math.min(innerWidth - 50, event.clientX + 20); ty = Math.min(innerHeight - 35,event.clientY + 20);
    if (!cursor.classList.contains('visible')) { x = tx; y = ty; }
    cursor.classList.add('visible');
    cursor.classList.toggle('over-link', Boolean(event.target.closest('a,button')));
    clearTimeout(cursorTimer); cursorTimer = setTimeout(function () { cursor.classList.remove('visible'); }, 1100);
    if (!cursorFrame) cursorFrame = requestAnimationFrame(follow);
  }, {passive:true});
  document.addEventListener('pointerleave', function () { cursor.classList.remove('visible'); });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape' || document.querySelector('dialog[open]')) return;
    const menu = document.querySelector('.nav-links.open');
    const button = document.querySelector('.menu-toggle[aria-expanded="true"]');
    if (menu && button) { menu.classList.remove('open'); button.setAttribute('aria-expanded','false'); button.focus(); }
  });
  function applyMotion() {
    root.dataset.motion = reduced ? 'reduced' : 'full';
    toggle.textContent = reduced ? 'Motion: reduced' : 'Reduce motion';
    toggle.setAttribute('aria-pressed', String(reduced));
    if (reduced) { stopCar(); cursor.classList.remove('visible'); }
    else drive();
    window.dispatchEvent(new CustomEvent('portfolio-motion-change',{detail:{reduced:reduced}}));
  }
  toggle.addEventListener('click', function () {
    reduced = !reduced;
    try { localStorage.setItem('hj-motion',reduced ? 'reduced' : 'full'); } catch (_) {}
    applyMotion();
  });
  preference.addEventListener('change', function (event) {
    let stored; try { stored = localStorage.getItem('hj-motion'); } catch (_) {}
    if (!stored) { reduced = event.matches; applyMotion(); }
  });
  document.addEventListener('visibilitychange', function () {
    root.classList.toggle('tab-inactive',document.hidden);
    if (document.hidden) { stopCar(); cursor.classList.remove('visible'); } else drive();
  });
  const topLink = footer.querySelector('.route-bottom a');
  if (document.querySelector('#hero')) topLink.href = '#hero';
  applyMotion();
})();
