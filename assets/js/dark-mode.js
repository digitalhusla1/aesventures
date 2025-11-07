// dark-mode.js — persist dark mode and apply the .dark class
// Uses a checkbox with id="theme-toggle" and localStorage key 'ae_theme_dark'
(function () {
  const KEY = 'ae_theme_dark';

  function applyDark(checked) {
    try {
      document.body.classList.toggle('dark', !!checked);
    } catch (e) {
      // ignore in weird environments
    }
  }

  function init() {
    const chk = document.getElementById('theme-toggle');
    if (!chk) return;

    // Restore saved preference
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'true') chk.checked = true;
      else if (saved === 'false') chk.checked = false;
    } catch (e) {}

    // Apply initial state
    applyDark(chk.checked);

    // Save + apply on change
    chk.addEventListener('change', function () {
      try {
        localStorage.setItem(KEY, chk.checked ? 'true' : 'false');
      } catch (e) {}
      applyDark(chk.checked);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
