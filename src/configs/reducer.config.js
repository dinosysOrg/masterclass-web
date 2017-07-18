import {combineReducers} from 'redux';
import {initReducer} from '../redux';

const rootReducer = combineReducers({
  initStore: initReducer,
});
export default rootReducer;


