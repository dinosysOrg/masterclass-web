import {combineEpics} from 'redux-observable';
import {getBrowsePath, loginRequestEpic, signupRequestEpic, signOutEpic, fbRequestEpic,
  myPathRequestEpic, changeEnEpic, changeViEpic, getUserInfoRequestEpic} from '../redux';
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
);
