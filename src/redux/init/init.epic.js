import 'rxjs';
import {setLanguage} from 'redux-i18n';
import * as types from './init.types';

const changeEnEpic = (action$, store) =>
  action$.ofType(types.CHANGELANGUAGE_TO_EN)
    .do(() => {
      store.dispatch(setLanguage('en'));
    })
    .ignoreElements();

const changeViEpic = (action$, store) =>
  action$.ofType(types.CHANGELANGUAGE_TO_VI)
    .do(() => {
      store.dispatch(setLanguage('vi'));
    })
    .ignoreElements();

export {
  changeEnEpic,
  changeViEpic,
};
