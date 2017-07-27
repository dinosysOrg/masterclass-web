import {combineReducers} from 'redux';
import {userReducer, initReducer} from '../redux';
const rootReducer = combineReducers({
  userReducer,
  initReducer,
});
export default rootReducer;

