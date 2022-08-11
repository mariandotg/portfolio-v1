import { ReactNode } from 'react';
import { variants } from './buttonStyles';

export interface IButton {
  children: ReactNode;
  variant: 'text' | 'primary' | 'secondary';
  url?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  icon?: boolean;
}

const Button = (props: IButton) => {
  const {
    children,
    variant,
    url,
    disabled,
    onClick,
    type = 'button',
    className,
    icon,
  } = props;

  const styles = `${variants[variant]} ${className} ${
    icon
      ? ' p-4 rounded-base border'
      : 'px-7 py-3 w-fit border rounded-xl font-bold text-button font-mono'
  } disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <>
      {url ? (
        <a
          className={styles}
          onClick={onClick}
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          {children}
        </a>
      ) : (
        <button
          className={styles}
          onClick={onClick}
          disabled={disabled}
          type={type}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
