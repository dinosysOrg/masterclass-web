import * as types from './init.types';

const initialState = {};
/**
 * init reducer redux
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
*/
export default function init(state = initialState, action) {
  switch (action.type) {
  case types.INIT_APPLICATION:
    return {
      ...action.payload,
      reduxConnect: true,
    };
  default:
    return state;
  }
}
