import {combineReducers} from 'redux';
import {userReducer, initReducer, pathReducer} from '../redux';
import {reducer as reduxFormReducer} from 'redux-form';
const rootReducer = combineReducers({
  form: reduxFormReducer,
  userReducer,
  initReducer,
  pathReducer,
});

export default rootReducer;
