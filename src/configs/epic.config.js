import {combineEpics} from 'redux-observable';
import {loginRequestEpic} from '../redux';
export default combineEpics(
  loginRequestEpic,
);

