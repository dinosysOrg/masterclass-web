import {combineReducers} from 'redux';
import {userReducer, initReducer, pathReducer} from '../redux';
const rootReducer = combineReducers({
  userReducer,
  initReducer,
  pathReducer,
});

export default rootReducer;
