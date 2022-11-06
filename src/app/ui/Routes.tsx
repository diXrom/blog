import { Routes, Route, HashRouter as Router } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import FullPost from 'pages/FullPost';
import NewPost from 'pages/NewPost';
import Layout from 'widgets/Layout';
import { ROUTE_PATH } from 'shared/common/constants';
import 'app/lib/style.scss';
import Registration from 'pages/Registration';
import Login from 'pages/Login';

const MainRoutes = () => (
  <Router>
    <Routes>
      <Route path={ROUTE_PATH.INDEX} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={`${ROUTE_PATH.POST}/:id`} element={<FullPost />} />
        <Route path={`${ROUTE_PATH.EDIT}/:id`} element={<NewPost />} />
        <Route path={`${ROUTE_PATH.ADD}`} element={<NewPost />} />
        <Route path={ROUTE_PATH.REGISTRATION} element={<Registration />} />
        <Route path={ROUTE_PATH.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  </Router>
);

export default MainRoutes;
