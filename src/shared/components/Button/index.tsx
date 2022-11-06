import { ComponentPropsWithoutRef, FC, memo } from 'react';
import clsx from 'clsx';

interface IButton extends ComponentPropsWithoutRef<'button'> {
  outline?: boolean;
}

const Button: FC<IButton> = ({ children, className, type, outline = false, ...props }) => (
  <button
    {...props}
    type={type ? 'submit' : 'button'}
    className={clsx(
      className,
      'px-2.5 py-1.5 border-2 text-sm font-medium rounded shadow-xl text-white active:scale-95 transition duration-300 disabled:opacity-50 disabled:scale-100 disabled:pointer-events-none',
      `${
        outline
          ? 'border-gray-900 bg-transparent text-black hover:text-white hover:bg-gray-900 disabled:bg-transparent disabled:text-black'
          : 'bg-gray-900 border-transparent hover:text-black hover:bg-white hover:border-gray-900 disabled:bg-transparent disabled:text-white disabled:bg-gray-900'
      }`
    )}
  >
    {children}
  </button>
);

export default memo(Button);
