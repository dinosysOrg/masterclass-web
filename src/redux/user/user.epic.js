import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './user.types';
import * as actions from './user.action';
import {loginAPI} from './user.api';
import * as actionInit from '../init/init.action';
import {concat as concat$} from 'rxjs/observable/concat';
import {of} from 'rxjs/observable/of';
import storeConfig from '../../configs/storage.config';

/**
 * action fetch data
 * @param {any} action$
 * @return {Object}
*/
const loginRequestEpic = (action$) =>
  action$.ofType(types.LOGIN_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(actionInit.showLoading()),
        ajax.post(loginAPI, {}, data.payload)
          .mergeMap( (response) =>
            of(
              actionInit.saveAuth(response),
              actionInit.hideModal()
            )
              .do(storeConfig.setUserLocal(response.xhr, response))
          )
          .catch((error) => of(actions.loginRequestFailure(error))),
        of(actionInit.hideLoading())
      )
    );
export {
  loginRequestEpic,
};
