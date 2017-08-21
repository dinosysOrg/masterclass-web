import {combineEpics} from 'redux-observable';
import {fetchPathEpic, loginRequestEpic, signupRequestEpic, signOutEpic, fbRequestEpic,
  myPathRequestEpic, changeEnEpic, changeViEpic, getUserInfoRequestEpic} from '../redux';
export default combineEpics(
  loginRequestEpic,
  fetchPathEpic,
  signupRequestEpic,
  signOutEpic,
  fbRequestEpic,
  myPathRequestEpic,
  changeEnEpic,
  changeViEpic,
  getUserInfoRequestEpic,
);
