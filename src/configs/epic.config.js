import {combineEpics} from 'redux-observable';
<<<<<<< Updated upstream
import {getBrowsePath, loginRequestEpic, signupRequestEpic, fbRequestEpic,
  myPathRequestEpic, changeEnEpic, changeViEpic, getUserInfoRequestEpic, getQuizRequestEpic, saveQuizEpic, putUserInfoRequestEpic, getHomePath, putUserLayoutEpic, searchPath} from '../redux';
=======
import {getBrowsePath, loginRequestEpic, signupRequestEpic, signOutEpic, fbRequestEpic,
  myPathRequestEpic, changeEnEpic, changeViEpic, getUserInfoRequestEpic, getQuizRequestEpic, saveQuizEpic, putUserInfoRequestEpic, getHomePath, putUserLayoutEpic, searchPath, overviewPath} from '../redux';
>>>>>>> Stashed changes
export default combineEpics(
  loginRequestEpic,
  getBrowsePath,
  signupRequestEpic,
  fbRequestEpic,
  myPathRequestEpic,
  changeEnEpic,
  changeViEpic,
  getUserInfoRequestEpic,
  getQuizRequestEpic,
  saveQuizEpic,
  putUserInfoRequestEpic,
  getHomePath,
  putUserLayoutEpic,
  searchPath,
  overviewPath
);
