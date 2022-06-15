import { ReactNode } from 'react';

interface props {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  url?: string;
}

const Button = ({ children, variant = 'primary', url }: props) => {
  const style = `${
    variant === 'primary'
      ? 'bg-light-accent border-transparent text-white'
      : 'bg-transparent border-light-accent text-light-accent'
  } px-8 py-4 w-fit border-2 rounded-xl font-bold`;

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
