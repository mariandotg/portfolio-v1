import React from 'react';
import { IIconButton } from '../../models/data';

const IconButton = ({ children, clickFunction, style }: IIconButton) => {
  return (
    <button
      className={`${style} p-4 ml-auto rounded-base bg-light-primary dark:bg-dark-primary text-light-card-bg dark:text-dark-card-bg fixed bottom-4 right-4`}
      onClick={clickFunction}
    >
      {children}
    </button>
  );
};

export default IconButton;
