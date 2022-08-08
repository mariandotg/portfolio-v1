import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../../app/store/slices/data';
import { IContactField } from '../../models/data';
import Button from '../Buttons/Button';

const Contact = () => {
  const data = useSelector(selectData);
  const { title, cards, cta } = data.sections.contact;
  return (
    <section className='flex flex-col items-end gap-4'>
      <h2 className='text-xl font-bold self-start text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      {cards.map((e: IContactField) => (
        <div
          key={e.id}
          className='flex flex-col w-full gap-1 text-light-secondary dark:text-dark-secondary focus-within:text-light-primary dark:focus-within:text-dark-primary'
        >
          <label className='text-lg font-bold '>{e.label}</label>
          {e.type === 'textarea' ? (
            <div className='h-[192px] px-4 py-3 rounded-[8px] focus:outline-none border border-light-secondary dark:border-dark-secondary focus-within:border-light-primary dark:focus-within:border-dark-primary'>
              <textarea
                placeholder={e.placeholder}
                className='resize-none w-full h-full bg-transparent focus:outline-none text-light-text dark:text-dark-text'
              ></textarea>
            </div>
          ) : (
            <input
              type={e.type}
              placeholder={e.placeholder}
              className='w-full px-4 py-3 rounded-[8px] bg-transparent border focus:outline-none border-light-secondary dark:border-dark-secondary focus:border-light-primary dark:focus:border-dark-primary text-light-text dark:text-dark-text'
            ></input>
          )}
        </div>
      ))}
      <Button variant={cta.variant}>{cta.cta}</Button>
    </section>
  );
};

export default Contact;
