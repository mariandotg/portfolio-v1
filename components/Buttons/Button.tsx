import { ReactNode } from 'react';

interface props {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  url?: string;
  icon?: boolean;
}

const Button = ({ children, variant, url, icon }: props) => {
  const variants = {
    primary: 'bg-light-primary border-transparent text-white',
    secondary: 'bg-transparent border-light-primary text-light-primary',
  };

  const style = `${variants[variant]} ${
    icon ? 'p-4' : 'px-8 py-4'
  } w-fit border-2 rounded-xl font-bold`;

  return (
    <>
      {url ? (
        <a className={style} href={url} target='_blank' rel='noreferrer'>
          {children}
        </a>
      ) : (
        <button className={style}>{children}</button>
      )}
    </>
  );
};

export default Button;
