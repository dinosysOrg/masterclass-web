import {Home, Browse, Profile, DashBoard, Path} from '../containers';

const routes = [
  {
    path: '/',
    component: Home,
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
  {
    path: '/Path',
    component: Path,
    exact: false,
  },
];

export default routes;
