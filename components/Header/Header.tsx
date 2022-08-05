import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LanguageIcon from '@mui/icons-material/Language';

import { selectData } from '../../app/store/slices/data';
import { ILanguage } from '../../models/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const data = useSelector(selectData);
  const { languagesList } = data.sections.header;

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
      <header className='sticky top-0 w-full p-4 bg-light-bg'>
        <div className='w-fit relative'>
          <button
            className='flex items-center py-4 gap-2'
            onClick={handleLangChange}
          >
            <LanguageIcon />
            <span>{currentLanguage}</span>
            {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          </button>
          {isOpen && (
            <ul className='absolute bg-light-card-bg rounded-base w-full px-4 py-2 text-right'>
              {languagesList.map((l: ILanguage) => {
                return (
                  <li
                    key={l.id}
                    value={l.slug}
                    className={`py-2 ${
                      l.slug === data.language
                        ? 'before:content-["●"] before:mr-2 text-light-primary'
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
      </header>
    </>
  );
};

export default Header;
