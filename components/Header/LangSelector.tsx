import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { selectData } from '../../app/store/slices/data';
import { IMenuItem } from '../../models/data';

const LangSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const data = useSelector(selectData);
  const { menu } = data.sections.header;

  const completeLangsList = menu.slice(2);

  const langList = completeLangsList.filter(
    (item: IMenuItem) => item.slug !== data.language
  );

  const currentLanguage = completeLangsList.find(
    (item: IMenuItem) => item.slug === data.language
  );

  const handleLangChange = () => setIsOpen((prevValue: boolean) => !prevValue);

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`, `/${lang}`, { locale: lang });
    handleLangChange();
  };

  return (
    <li className='relative w-fill'>
      <div
        className='flex items-center h-full gap-2 cursor-pointer hover:text-light-primary hover:dark:text-dark-primary'
        onClick={handleLangChange}
      >
        {currentLanguage!.displayName}
        {!isOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </div>
      {isOpen && (
        <ul className='absolute z-20 px-4 py-2 text-right rounded-lg shadow-lg w-fit bg-light-card-bg dark:bg-dark-card-bg'>
          {langList.map((item: IMenuItem) => {
            return (
              <li
                key={item.id}
                value={item.slug}
                tabIndex={0}
                className='flex items-center py-2 cursor-pointer w-fill hover:text-light-primary hover:dark:text-dark-primary'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') return changeLanguage(item.slug);
                }}
                onClick={() => changeLanguage(item.slug)}
              >
                {item.displayName}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default LangSelector;
