import {combineEpics} from 'redux-observable';
import {fetchPathEpic, loginRequestEpic, signupRequestEpic, signOutEpic, fbRequestEpic, myPathRequestEpic} from '../redux';
export default combineEpics(
  loginRequestEpic,
  fetchPathEpic,
  signupRequestEpic,
  signOutEpic,
  fbRequestEpic,
  myPathRequestEpic,
);

