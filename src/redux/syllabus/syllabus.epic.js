import "rxjs";
import { ajax } from "rxjs/observable/dom/ajax";
import * as types from "./syllabus.types";
import * as actions from "./syllabus.action";
import { getSyllabusDetailAPI } from "./syllabus.api";
import { concat as concat$ } from "rxjs/observable/concat";
import { of } from "rxjs/observable/of";
import { beginTask, endTask } from "redux-nprogress";

/**
 * This epic defines the whole operation of fetching syllabus from server
 * include 3 phases: start fetching, fetching success of fetching failed
 * @param {Object} action$ - action stream
 * @param {Object} store - action stream
 * @return {Object} action stream
 */
const getSyllabusDetailEpic = (action$, store) =>
  action$.ofType(types.FETCH_SYLLABUS_REQUEST)
  .mergeMap(data =>
    concat$(
      of(store.dispatch(beginTask())),
      ajax
        .get(`${getSyllabusDetailAPI}`)
        .map(() => actions.fetchSyllabusSuccess(data.payload))
        .catch(error => of(actions.fetchSyllabusFailed(error))),
      of(store.dispatch(endTask()))
    )
  );
export {
  getSyllabusDetailEpic,
};
