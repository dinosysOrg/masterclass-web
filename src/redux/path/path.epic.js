import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './path.types';
import * as actions from './path.actions';
import {getPathAPI} from './path.api';
import {concat as concat$} from 'rxjs/observable/concat';
import * as actionInit from '../init/init.action';
import {of} from 'rxjs/observable/of';
import {beginTask, endTask} from 'redux-nprogress';
import storeConfig from '../../configs/storage.config';
/**
 * This epic defines the whole operation of fetching path from server
 * include 3 phases: start fetching, fetching success of fetching failed
 * @param {Object} action$ - action stream
 * @param {Object} store - action stream
 * @return {Object} action stream
 */
const getBrowsePath = (action$, store) =>
  action$.ofType(types.FETCH_BROWSE_PATH)
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
  action$.ofType(types.FETCH_HOME_PATH)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.get(`${getPathAPI}`)
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
const searchPath = (action$, store) =>
action$.ofType(types.SEARCH_PATH_REQUEST)
  .mergeMap((data) =>
    concat$(
      of(actionInit.showLoading()),
      ajax.get(`${getPathAPI}?type=search&path_name=${data.payload}`)
        .map((json) => actions.searchPathSuccess(json.response))
        .catch((error) => of(actions.searchPathFailed(error))),
      of(actionInit.hideLoading()),
    )
  );
  /**
   * This epic defines the whole operation of fetching path from server
   * include 3 phases: start fetching, fetching success of fetching failed
   * @param {Object} action$ - action stream
   * @param {Object} store - action stream
   * @return {Object} action stream
   */
  const overviewPath = (action$, store) =>
  action$.ofType(types.FETCH_OVERVIEW_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.get(`${getPathAPI}/${data.payload}`)
          .map((json) => actions.fetchOverviewPathSuccess(json.response))
          .catch((error) => of(actions.fetchOverviewPathFailed(error))),
        of(store.dispatch(endTask())),
      )
    );
export {
  getBrowsePath,
  getHomePath,
  searchPath,
  overviewPath,
};
