// import { FETCHING_DATA } from './constants'
import * as types from './user.types';
import * as actions from './user.action';
import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';

/**
 * action fetch data
 * @param {any} action$
 * @return {Object}
*/
const fetchUserEpic = (action$) =>
  action$.ofType(types.FETCHING_USER)
    .mergeMap((action) =>
      ajax.getJSON(`https://randomuser.me/api/?results=100`)
        .map((response) => actions.fetchUserSuccess(response))
        .catch((error) => actions.fetchUserFailure(error))
    );
export {
  fetchUserEpic,
};
