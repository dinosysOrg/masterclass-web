import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './user.types';
import * as actions from './user.action';
import {getUserAPI} from './user.api';

/**
 * action fetch data
 * @param {any} action$
 * @return {Object}
*/
const fetchUserEpic = (action$) =>
  action$.ofType(types.FETCHING_USER)
    .mergeMap((action) =>
      ajax.getJSON(getUserAPI)
        .map((response) => actions.fetchUserSuccess(response))
        .catch((error) => actions.fetchUserFailure(error))
    );
export {
  fetchUserEpic,
};
