const states = {
  text: {
    hover:
      'hover:text-light-primary-hover dark:hover:text-dark-primary-hover active:text-light-primary-hover dark:active:text-dark-primary-hover',
  },
  primary: {
    hover:
      'hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover active:bg-light-primary-hover dark:active:bg-dark-primary-hover',
  },
  secondary: {
    hover:
      'hover:bg-light-primary-hover/25 dark:hover:bg-dark-primary-hover/25 active:bg-light-primary-hover/25 dark:active:bg-dark-primary-hover/25',
  },
};

export const variants = {
  text: `bg-transparent border-transparent text-light-primary dark:text-dark-primary ${states.text.hover}`,
  primary: `bg-light-primary border-transparent text-white dark:bg-dark-primary dark:text-black ${states.primary.hover}`,
  secondary: `bg-transparent border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary ${states.secondary.hover}`,
};
