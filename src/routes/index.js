import {HomePage, Browse, Profile, DashBoard} from '../containers';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/Browse',
    component: Browse,
    exact: true,
  },
  {
    path: '/Profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/Dashboard',
    component: DashBoard,
    exact: true,
  },
];

export default routes;
