(function () {
  const toggle = document.getElementById('ai-menu-toggle');
  const links = document.getElementById('ai-nav-links');
  function closeMenu() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    toggle.setAttribute('aria-expanded', String(links.classList.toggle('open')));
  });
  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && links.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
})();
