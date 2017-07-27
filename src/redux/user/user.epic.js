import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './user.types';
import * as actions from './user.action';
import {loginAPI} from './user.api';
import * as typesLoading from '../loading/loading.types';
import {concat as concat$} from 'rxjs/observable/concat';
import {of as of$} from 'rxjs/observable/of';
import {from as from$} from 'rxjs/observable/from';
import * as actionModal from '../loading/loading.action';
/**
 * action fetch data
 * @param {any} action$
 * @return {Object}
*/
const loginRequestEpic = (action$) =>
  action$.ofType(types.LOGIN_REQUEST).mergeMap((data) =>
    concat$(
      of$({type: typesLoading.SHOW_LOADING}),
      from$(ajax.post(loginAPI, {}, data.payload))
        .map((response) => actions.loginRequestSuccess(response))
        .map(() => actionModal.hideModal())
        .catch((error) => of$({type: types.LOGIN_REQUEST_FAILURE, payload: error.xhr.response.errors[0]})),
      of$({type: typesLoading.HIDE_LOADING}),
    )
  );
export {
  loginRequestEpic,
};
