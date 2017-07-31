import {combineReducers} from 'redux';
import {userReducer, pathReducer} from '../redux';

const rootReducer = combineReducers({
  path: pathReducer,
  user: userReducer,
});

export default rootReducer;

