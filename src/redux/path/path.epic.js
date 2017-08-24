import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './path.types';
import * as actions from './path.actions';
import {getBrowsePathAPI} from './path.api';
import * as actionInit from '../init/init.action';
import {concat as concat$} from 'rxjs/observable/concat';
import {of} from 'rxjs/observable/of';
import storeConfig from '../../configs/storage.config';

/**
 * This epic defines the whole operation of fetching path from server
 * include 3 phases: start fetching, fetching success of fetching failed
 * @param {Object} action$ - action stream
 * @return {Object} action stream
 */
const getBrowsePath = (action$) =>
  action$.ofType(types.FETCH_BROWSE_PATH)
    .mergeMap((data) =>
      concat$(
        of(actionInit.showLoading()),
        ajax.get(`${getBrowsePathAPI}`, storeConfig.setHeader())
          .map((json) => actions.fetchBrowsePathRequestSuccess(json.response))
          .catch((error) => of(actions.fetchBrowsePathRequestFailure(error))),
        of(actionInit.hideLoading())
      )
    );

export {
  getBrowsePath,
};
