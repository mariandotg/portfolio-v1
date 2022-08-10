import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { selectData } from '../../app/store/slices/data';
import { IContactField } from '../../models/data';
import Button from '../Buttons/Button';

interface IInitialValues {
  [index: string]: string;
  subject: string;
  from: string;
  message: string;
}

const Contact = () => {
  const data = useSelector(selectData);
  const { title, cards, cta, feedback } = data.sections.contact;

  const initialValues: IInitialValues = {
    subject: '',
    from: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    subject: Yup.string()
      .min(4, feedback.error.minCant)
      .required(feedback.required),
    from: Yup.string()
      .email(feedback.error.validEmail)
      .required(feedback.required),
    message: Yup.string().required(feedback.required),
  });

  const onSubmit = () => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => {
      resetForm();
      console.log(res);
      if (res.status === 200) {
        console.log('Response succeeded!');
      }
    });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    resetForm,
    errors,
    touched,
  } = formik;

  return (
    <section className='flex flex-col items-end gap-4'>
      <h2 className='self-start text-xl font-bold text-light-primary dark:text-dark-primary'>
        {title}
      </h2>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-end w-full gap-4'
      >
        {cards.map((e: IContactField) => (
          <div
            key={e.id}
            className='flex flex-col w-full gap-1 text-light-secondary dark:text-dark-secondary focus-within:text-light-primary dark:focus-within:text-dark-primary'
          >
            <label className='font-bold '>{e.label}</label>
            {e.type === 'textarea' ? (
              <>
                <div className='h-[192px] px-4 py-3 rounded-[8px] focus:outline-none border border-light-secondary dark:border-dark-secondary focus-within:border-light-primary dark:focus-within:border-dark-primary'>
                  <textarea
                    name={e.name}
                    placeholder={e.placeholder}
                    value={values[e.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='w-full h-full bg-transparent resize-none focus:outline-none text-light-text dark:text-dark-text'
                  ></textarea>
                </div>
                {errors[e.name] && touched[e.name] && (
                  <span className='text-red-500'>{errors[e.name]}</span>
                )}
              </>
            ) : (
              <>
                <input
                  name={e.name}
                  type={e.type}
                  placeholder={e.placeholder}
                  value={values[e.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='w-full px-4 py-3 rounded-[8px] bg-transparent border focus:outline-none border-light-secondary dark:border-dark-secondary focus:border-light-primary dark:focus:border-dark-primary text-light-text dark:text-dark-text'
                ></input>
                {errors[e.name] && touched[e.name] && (
                  <span className='text-red-500'>{errors[e.name]}</span>
                )}
              </>
            )}
          </div>
        ))}
        <Button variant={cta.variant}>{cta.cta}</Button>
      </form>
    </section>
  );
};

export default Contact;
