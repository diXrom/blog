import { Link, useLocation } from 'react-router-dom';
import { ROUTE_PATH, STORAGE_TOKEN } from 'shared/common/constants';
import { isAuth } from 'shared/common/util';
import Button from 'shared/components/Button';

const Home = (
  <Link to={ROUTE_PATH.INDEX}>
    <Button outline>Главная</Button>
  </Link>
);
const NewPost = (
  <Link to={ROUTE_PATH.ADD}>
    <Button outline>Добавить статью</Button>
  </Link>
);

const Header = () => {
  const { pathname } = useLocation();
  const handleClick = () => {
    localStorage.setItem(STORAGE_TOKEN, '');
    window.location.reload();
  };

  return (
    <header className="flex content-center bg-white shadow-md ">
      <div className="container flex justify-between mx-auto px-2.5 md:px-5">
        <Link to="/" className="flex">
          <img
            src={`${process.env.PUBLIC_URL}/di.svg`}
            alt="di"
            className="w-24 transition duration-300"
          />
        </Link>
        <div className="items-center flex-shrink-0 gap-2.5 flex">
          {pathname === '/' ? isAuth() && NewPost : Home}
          {isAuth() ? (
            <Button onClick={handleClick}>Выйти</Button>
          ) : (
            <Link to={ROUTE_PATH.LOGIN}>
              <Button>Войти</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
