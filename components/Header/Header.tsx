import { useState } from 'react';
import useScroll from '../../hooks/useScroll';
import useTheme from '../../hooks/useTheme';
import useIsMounted from '../../hooks/useIsMounted';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import BrandLogo from '../../public/mariandotg_logo.svg';
import Button from '../Buttons/Button';
import MenuItems from './MenuItems';
import LangSelector from './LangSelector';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const { scrollPercent } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();

  const handleOpenNav = () => setNavOpen((prevValue: boolean) => !prevValue);

  return (
    <>
      <header className='sticky top-0 z-50'>
        <nav className='flex w-full p-4 bg-light-bg dark:bg-dark-bg'>
          <BrandLogo
            className='w-[92px] h-[58px] dark:fill-dark-text py-2 pr-4'
            viewBox='0 0 92 58'
          />
          <ul className='hidden gap-4 font-bold mobile:flex mobile:items-center'>
            <MenuItems />
            <LangSelector />
          </ul>
          <Button
            variant='primary'
            onClick={handleOpenNav}
            className='ml-auto mobile:hidden'
            ariaLabel='Open menu'
            icon
          >
            {!isNavOpen ? <MenuIcon /> : <CloseIcon />}
          </Button>
          {isMounted && (
            <Button
              variant='primary'
              onClick={toggleTheme}
              className='ml-4 mobile:ml-auto'
              ariaLabel='Toggle theme button'
              icon
            >
              {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
          )}
        </nav>
        <div className='w-full h-1 bg-light-card-bg dark:bg-dark-card-bg'>
          <div
            className='h-1 transition bg-light-primary dark:bg-dark-primary'
            style={{ width: scrollPercent }}
          ></div>
        </div>
        <div className='relative'>
          {isNavOpen && (
            <ul className='absolute z-10 flex flex-col w-full gap-4 p-4 font-bold shadow-lg bg-light-card-bg dark:bg-dark-card-bg mobile:hidden'>
              <MenuItems />
              <LangSelector />
            </ul>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
