import {initReducer} from './init';
import {userReducer, loginRequestEpic} from './user';
import {pathReducer, pathEpic} from './path';

const {fetchPathEpic} = pathEpic;

export {
  pathReducer,
  userReducer,
  initReducer,
  loginRequestEpic,
  fetchPathEpic,
};
