import { useState } from 'react';
import { useSelector } from 'react-redux';
import useScroll from '../../hooks/useScroll';
import useTheme from '../../hooks/useTheme';
import useIsMounted from '../../hooks/useIsMounted';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import BrandLogo from '../../public/mariandotg_logo.svg';
import Button from '../Buttons/Button';
import LangSelector from './LangSelector';

import { selectData } from '../../app/store/slices/data';
import { IMenuItem } from '../../models/data';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const { scrollPercent } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();

  const data = useSelector(selectData);
  const { menu } = data.sections.header;

  const menuItemsList = menu.slice(0, 2);

  const handleOpenNav = () => setNavOpen((prevValue: boolean) => !prevValue);

  return (
    <>
      <header className='sticky top-0 z-50'>
        <nav className='flex w-full p-4 bg-light-bg dark:bg-dark-bg'>
          <BrandLogo
            className='w-[92px] h-[58px] dark:fill-dark-text py-2 pr-4'
            viewBox='0 0 92 58'
          />
          <ul className='hidden gap-4 font-bold mobile:flex '>
            {menuItemsList.map((item: IMenuItem) => (
              <li
                key={item.id}
                className='flex items-center gap-2 py-4 cursor-pointer hover:text-light-primary hover:dark:text-dark-primary'
              >
                {item.displayName}
              </li>
            ))}
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
              {menuItemsList.map((item: IMenuItem) => (
                <li
                  key={item.id}
                  className='cursor-pointer w-fit hover:text-light-primary hover:dark:text-dark-primary'
                >
                  {item.displayName}
                </li>
              ))}
              <LangSelector />
            </ul>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
