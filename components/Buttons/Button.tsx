import { IButton } from '../../models/data';

const Button = ({ children, variant, url }: IButton) => {
  const variants = {
    primary: 'bg-light-primary border-transparent text-white',
    secondary: 'bg-transparent border-light-primary text-light-primary',
  };

  const style = `${variants[variant]} px-7 py-3 w-fit border rounded-xl font-bold text-button font-mono`;

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
