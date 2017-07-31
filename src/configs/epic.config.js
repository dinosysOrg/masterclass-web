import {combineEpics} from 'redux-observable';
import {fetchUserEpic, fetchPathEpic} from '../redux';
export default combineEpics(
  fetchUserEpic,
  fetchPathEpic,
);

