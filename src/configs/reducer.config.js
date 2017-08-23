import {combineReducers} from 'redux';
import {userReducer, initReducer, pathReducer} from '../redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import {i18nState} from 'redux-i18n';
import {nprogress} from 'redux-nprogress';

const rootReducer = combineReducers({
  nprogress,
  router: routerReducer,
  form: reduxFormReducer,
  i18nState,
  userReducer,
  initReducer,
  pathReducer,
});

export default rootReducer;
