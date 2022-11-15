import { useLocation } from 'react-router-dom';
import { ReactNode, useLayoutEffect } from 'react';

interface IScrollWrapper {
  children: JSX.Element;
}

const ScrollWrapper = ({ children }: IScrollWrapper) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return children;
};

export default ScrollWrapper;
