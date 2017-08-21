import {Home, Browse, Profile, DashBoard, Path, Quiz} from '../containers';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/Browse',
    component: Browse,
  },
  {
    path: '/Profile',
    component: Profile,
  },
  {
    path: '/Dashboard',
    component: DashBoard,
  },
  {
    path: '/Path',
    component: Path,
  },
  {
    path: '/Quiz',
    component: Quiz,
  },
];

export default routes;
