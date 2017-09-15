import initReducer from './init/init.reducers';
import userReducer from './user/user.reducers';
import {loginRequestEpic, signupRequestEpic, fbRequestEpic, myPathRequestEpic, getUserInfoRequestEpic,
  getQuizRequestEpic, saveQuizEpic, putUserInfoRequestEpic, putUserLayoutEpic} from './user/user.epic';
import {changeEnEpic, changeViEpic} from './init/init.epic';
import pathReducer from './path/path.reducer';
import {getBrowsePath, getHomePath, searchPath} from './path/path.epic';
import syllabusReducer from './syllabus/syllabus.reducers';
import {getSyllabusDetailEpic} from './syllabus/syllabus.epic'

export {
  pathReducer,
  userReducer,
  initReducer,
  syllabusReducer,
  loginRequestEpic,
  getBrowsePath,
  signupRequestEpic,
  fbRequestEpic,
  myPathRequestEpic,
  changeViEpic,
  changeEnEpic,
  getUserInfoRequestEpic,
  getQuizRequestEpic,
  saveQuizEpic,
  putUserInfoRequestEpic,
  getHomePath,
  putUserLayoutEpic,
  searchPath,
  getSyllabusDetailEpic,
};
