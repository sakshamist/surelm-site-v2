(function () {
  var btn = document.getElementById('mobile-nav-toggle');
  var panel = document.getElementById('mobile-nav-panel');
  if (!btn || !panel) return;

  function open() {
    btn.setAttribute('aria-expanded', 'true');
    panel.classList.remove('hidden');
  }

  function close() {
    btn.setAttribute('aria-expanded', 'false');
    panel.classList.add('hidden');
  }

  btn.addEventListener('click', function () {
    btn.getAttribute('aria-expanded') === 'true' ? close() : open();
  });

  panel.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      close();
      btn.focus();
    }
  });
})();
