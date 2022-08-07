(function initTheme() {
  const theme =
    typeof window !== 'undefined'
      ? localStorage.theme !== undefined
        ? localStorage.theme
        : 'dark'
      : 'dark';
  if (theme === 'dark') {
    document.querySelector('html').classList.add('dark');
  }
})();
