import useTheme from '../../hooks/useTheme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        className='p-4 ml-auto rounded-base bg-light-primary text-light-card-bg '
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </>
  );
};

export default ThemeButton;
