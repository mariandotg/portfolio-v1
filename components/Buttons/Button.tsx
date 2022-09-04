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
  ariaLabel?: string;
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
    ariaLabel,
  } = props;

  const styles = `${variants[variant]} ${className} ${
    icon
      ? 'p-4 rounded-base border'
      : 'px-7 py-3 w-fit border rounded-xl font-bold whitespace-nowrap text-button'
  } disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <>
      {url ? (
        <a
          className={styles}
          onClick={onClick}
          href={url}
          aria-label={ariaLabel}
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
          aria-label={ariaLabel}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
