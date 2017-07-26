import {combineReducers} from 'redux';
import {userReducer, loadingReducer} from '../redux';
const rootReducer = combineReducers({
  userReducer,
  loadingReducer,
});
export default rootReducer;

