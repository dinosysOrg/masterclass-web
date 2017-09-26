import 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as types from './path.types';
import * as actions from './path.actions';
import {getPathAPI, getInstruments, getMyCourses, getOverallProgress} from './path.api';
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
        of(store.dispatch(endTask( ))),
      )
    );
  /**
  * This epic defines the whole operation of fetching path from server
  * include 3 phases: start fetching, fetching success of fetching failed
  * @param {Object} action$ - action stream
  * @param {Object} store - action stream
  * @return {Object} action stream
  */
  const fetchInstrument = (action$, store) =>
  action$.ofType(types.FETCH_INSTRUMENT_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        of(actionInit.showLoading()),
        ajax.get(`${getInstruments}`)
        .map((json) => actions.fetchInstrumentSuccess(json.response))
        .catch((error) => of(actions.fetchInstrumentFailed(error))),
      )
    );
  /**
  * This epic defines the whole operation of fetching path from server
  * include 3 phases: start fetching, fetching success of fetching failed
  * @param {Object} action$ - action stream
  * @param {Object} store - action stream
  * @return {Object} action stream
  */
  const fetchCourses = (action$, store) =>
  action$.ofType(types.FETCH_COURSES_REQUEST)
    .mergeMap((data) =>
      concat$(
        ajax.get(`${getMyCourses}`, storeConfig.setHeader())
        .map((json) => actions.fetchMyCoursesSuccess(json.response))
        .catch((error) => of(actions.fetchMyCoursesFailed(error))),
        of(actionInit.hideLoading()),
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
  const subscribePath = (action$) =>
  action$.ofType(types.SUBSCRIBE_PATH_REQUEST)
    .mergeMap((data) =>
      concat$(
        ajax.post(`${getPathAPI}/${data.payload}/subscribe`,{}, storeConfig.setHeader())
        .map((json) => actions.subscribePathSuccess(json.response))
        .catch((error) => of(actions.subscribePathFailed(error))),
      )
    );
  /**
  * This epic defines the whole operation of fetching path from server
  * @param {Object} action$ - action stream
  * @param {Object} store - action stream
  * @return {Object} action stream
  */
  const unsubscribePath = (action$) =>
  action$.ofType(types.UNSUBSCRIBE_PATH_REQUEST)
    .mergeMap((data) =>
      concat$(
        ajax.delete(`${getPathAPI}/${data.payload}/unsubscribe`, storeConfig.setHeader())
        .map((json) => actions.unsubscribePathSuccess(json.response))
        .catch((error) => of(actions.unsubscribePathFailed(error))),
      )
    );
  /**
  * This epic defines the whole operation of fetching path from server
  * @param {Object} action$ - action stream
  * @param {Object} store - action stream
  * @return {Object} action stream
  */
  const fetchOverallPath = (action$) =>
  action$.ofType(types.FETCH_OVERALL_PROGRESS_REQUEST)
    .mergeMap((data) =>
      concat$(
        ajax.get(`${getOverallProgress}?instrument_id=${data.payload}`, storeConfig.setHeader())
        .map((json) => actions.fetchOverallProgressSuccess(json.response))
        .catch((error) => of(actions.fetchOverallProgressFailed(error))),
      )
    );
    /**
   * This epic defines the whole operation of fetching practice path from server
   * include 3 phases: start fetching, fetching success of fetching failed
   * @param {Object} action$ - action stream
   * @param {Object} store - action stream
   * @return {Object} action stream
   */
  const getPracticeEpic = (action$, store) =>
  action$.ofType(types.FETCH_PRACTICE_REQUEST)
    .mergeMap((data) =>
      concat$(
        of(store.dispatch(beginTask())),
        ajax.get(`${getPathAPI}/${data.payload}/practices`, storeConfig.setHeader() )
          .map((json) => actions.fetchPracticeSuccess(json.response))
          .catch((error) => of(actions.fetchPracticeFailed(error))),
        of(store.dispatch(endTask())),
      )
    );
export {
  getBrowsePath,
  getHomePath,
  searchPath,
  overviewPath,
  fetchInstrument,
  fetchCourses,
  subscribePath,
  unsubscribePath,
  fetchOverallPath,
  getPracticeEpic,
};
