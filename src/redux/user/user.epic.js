import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './user.types';
import * as actions from './user.action';
import {loginAPI} from './user.api';
import * as actionInit from '../init/init.action';
import {concat as concat$} from 'rxjs/observable/concat';
import {of} from 'rxjs/observable/of';
import {from as from$} from 'rxjs/observable/from';
/**
 * action fetch data
 * @param {any} action$
 * @return {Object}
*/
const loginRequestEpic = (action$) =>
  action$.ofType(types.LOGIN_REQUEST).mergeMap((data) =>
    concat$(
      of(actionInit.showLoading()),
      from$(ajax.post(loginAPI, {}, data.payload))
        .mergeMap((response) => of(actions.loginRequestSuccess(response), actionInit.hideModal()))
        .catch((error) => of(actions.loginRequestFailure(error))),
      of(actionInit.hideLoading()),
    )
  );
export {
  loginRequestEpic,
};
