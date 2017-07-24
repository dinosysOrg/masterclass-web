import {combineEpics} from 'redux-observable';
import {fetchUserEpic} from '../redux';
export default combineEpics(
  fetchUserEpic
);

