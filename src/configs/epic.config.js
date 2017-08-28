import {combineEpics} from 'redux-observable';
import {getBrowsePath, loginRequestEpic, signupRequestEpic, signOutEpic, fbRequestEpic,
  myPathRequestEpic, changeEnEpic, changeViEpic, getUserInfoRequestEpic, getQuizRequestEpic, saveQuizEpic, putUserInfoRequestEpic} from '../redux';
export default combineEpics(
  loginRequestEpic,
  getBrowsePath,
  signupRequestEpic,
  signOutEpic,
  fbRequestEpic,
  myPathRequestEpic,
  changeEnEpic,
  changeViEpic,
  getUserInfoRequestEpic,
  getQuizRequestEpic,
  saveQuizEpic,
  putUserInfoRequestEpic,
);
