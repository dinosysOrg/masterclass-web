import {combineReducers} from 'redux';
import {userReducer, initReducer, pathReducer} from '../redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
const rootReducer = combineReducers({
  router: routerReducer,
  form: reduxFormReducer,
  userReducer,
  initReducer,
  pathReducer,
});

export default rootReducer;
