import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined'
      ? localStorage.theme !== undefined
        ? localStorage.theme
        : 'dark'
      : 'dark'
  );
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme(colorTheme);
  };

  return { theme, colorTheme, toggleTheme };
};

export default useTheme;
