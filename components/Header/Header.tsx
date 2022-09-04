import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import useScroll from '../../hooks/useScroll';
import useTheme from '../../hooks/useTheme';
import useIsMounted from '../../hooks/useIsMounted';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import Button from '../Buttons/Button';

import { selectData } from '../../app/store/slices/data';
import { ILanguage } from '../../models/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const data = useSelector(selectData);
  const { languagesList } = data.sections.header;
  const { scrollPercent } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const isMounted = useIsMounted();

  const handleLangChange = () => {
    setIsOpen((prevValue: boolean) => !prevValue);
  };

  const changeLanguage = (lang: string) => {
    if (lang === data.language) return;
    handleLangChange();
    router.push(`/${lang}`, `/${lang}`, { locale: lang });
  };

  const currentLanguage = languagesList
    .filter((l: ILanguage) => l.slug === data.language)[0]
    .displayName.toLocaleUpperCase();

  return (
    <>
      <header className='sticky top-0 z-50'>
        <div className='flex w-full p-4 bg-light-bg dark:bg-dark-bg'>
          <div className='relative w-fit'>
            <button
              className='flex items-center gap-2 py-4'
              onClick={handleLangChange}
            >
              <LanguageIcon />
              <span>{currentLanguage}</span>
              {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </button>
            {isOpen && (
              <ul className='absolute w-full px-4 py-2 text-right bg-light-card-bg dark:bg-dark-card-bg rounded-base'>
                {languagesList.map((l: ILanguage) => {
                  return (
                    <li
                      key={l.id}
                      value={l.slug}
                      className={`py-2 ${
                        l.slug === data.language
                          ? 'before:content-["●"] before:mr-2 text-light-primary dark:text-dark-primary'
                          : ''
                      }`}
                      onClick={() => changeLanguage(l.slug)}
                    >
                      {l.displayName.toLocaleUpperCase()}
                    </li>
                  );
                })}
              </ul>
            )}
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
        </div>
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
