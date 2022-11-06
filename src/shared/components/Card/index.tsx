import { ComponentPropsWithoutRef, FC, memo } from 'react';
import clsx from 'clsx';

interface ICard extends ComponentPropsWithoutRef<'div'> {}

const Card: FC<ICard> = ({ children, className, ...props }) => (
  <div
    {...props}
    className={clsx(
      className,
      'shadow-md rounded-lg bg-white overflow-hidden transition duration-300'
    )}
  >
    {children}
  </div>
);

export default memo(Card);
