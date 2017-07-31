import {combineEpics} from 'redux-observable';
import {fetchPathEpic, loginRequestEpic} from '../redux';
export default combineEpics(
  loginRequestEpic,
  fetchPathEpic,
);

