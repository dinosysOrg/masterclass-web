import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './path.types';
import * as actions from './path.actions';
import {getPathAPI} from './path.api';
import {concat as concat$} from 'rxjs/observable/concat';
import {of} from 'rxjs/observable/of';
import storeConfig from '../../configs/storage.config';
import {beginTask, endTask} from 'redux-nprogress';
/**
 * This epic defines the whole operation of fetching path from server
 * include 3 phases: start fetching, fetching success of fetching failed
 * @param {Object} action$ - action stream
 * @param {Object} store - action stream
 * @return {Object} action stream
 */
const getBrowsePath = (action$, store) =>
  action$.ofType(types.FETCH_PATH)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.get(`${getPathAPI}?type=browse`, storeConfig.setHeader())
          .map((json) => actions.fetchPathSuccess(json.response))
          .catch((error) => of(actions.fetchPathFailed(error))),
        of(store.dispatch(endTask())),
      )
    );
/**
 * This epic defines the whole operation of fetching path from server
 * include 3 phases: start fetching, fetching success of fetching failed
 * @param {Object} action$ - action stream
 * @param {Object} store - action stream
 * @return {Object} action stream
 */
const getHomePath = (action$, store) =>
  action$.ofType(types.FETCH_PATH)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.get(`${getPathAPI}`, storeConfig.setHeader())
          .map((json) => actions.fetchPathSuccess(json.response))
          .catch((error) => of(actions.fetchPathFailed(error))),
        of(store.dispatch(endTask())),
      )
    );
export {
  getBrowsePath,
  getHomePath,
};
