import pathReducer, {pathEpics} from './path';
import {userReducer, fetchUserEpic} from './user';

const {fetchPathEpic} = pathEpics;

export {
  pathReducer,
  userReducer,
  fetchUserEpic,
  fetchPathEpic,
};
