import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import useScroll from '../../hooks/useScroll';
import useTheme from '../../hooks/useTheme';
import useIsMounted from '../../hooks/useIsMounted';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import BrandLogo from '../../public/mariandotg_logo.svg';
import Button from '../Buttons/Button';

import { selectData } from '../../app/store/slices/data';
import { IMenuItem } from '../../models/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const data = useSelector(selectData);
  const { menu } = data.sections.header;
  const { scrollPercent } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();

  const menuItemsList = menu.slice(0, 2);
  const completeLangsList = menu.slice(2);

  const langList = completeLangsList.filter(
    (item: IMenuItem) => item.slug !== data.language
  );

  const handleLangChange = () => setIsOpen((prevValue: boolean) => !prevValue);

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`, `/${lang}`, { locale: lang });
    handleLangChange();
  };

  const currentLanguage = completeLangsList.find(
    (item: IMenuItem) => item.slug === data.language
  );

  return (
    <>
      <header className='sticky top-0 z-50'>
        <nav className='flex w-full p-4 bg-light-bg dark:bg-dark-bg'>
          <BrandLogo
            className='w-[92px] h-[58px] dark:fill-dark-text py-2 pr-4'
            viewBox='0 0 92 58'
          />
          <div className='flex gap-4 font-bold'>
            {menuItemsList.map((item: IMenuItem) => (
              <span
                key={item.id}
                className='flex items-center gap-2 py-4 cursor-pointer hover:text-light-primary hover:dark:text-dark-primary'
              >
                {item.displayName}
              </span>
            ))}
            <div className='relative w-fill'>
              <div
                className='flex items-center h-full gap-2 py-4 cursor-pointer hover:text-light-primary hover:dark:text-dark-primary'
                onClick={handleLangChange}
              >
                {currentLanguage!.displayName}
                {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </div>
              {isOpen && (
                <ul className='absolute px-4 py-2 text-right rounded-lg shadow-lg w-fit bg-light-card-bg dark:bg-dark-card-bg'>
                  {langList.map((item: IMenuItem) => {
                    return (
                      <li
                        key={item.id}
                        value={item.slug}
                        tabIndex={0}
                        className='flex items-center py-2 cursor-pointer w-fill hover:text-light-primary hover:dark:text-dark-primary'
                        onKeyDown={(e) => {
                          if (e.key === 'Enter')
                            return changeLanguage(item.slug);
                        }}
                        onClick={() => changeLanguage(item.slug)}
                      >
                        {item.displayName}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          {isMounted && (
            <Button
              variant='primary'
              onClick={toggleTheme}
              className='ml-auto'
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
      </header>
    </>
  );
};

export default Header;
