(function initTheme() {
  const theme =
    typeof window !== 'undefined'
      ? localStorage.theme !== undefined
        ? localStorage.theme
        : 'dark'
      : 'dark';

  document
    .querySelector('html')
    .classList.replace(theme === 'dark' ? 'light' : 'dark', theme);
})();
