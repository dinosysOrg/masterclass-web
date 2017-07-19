import * as types from './init.types';
/**
 * init action redux
 * @param {Object} response
 * @return {Object}
*/
export function initAction(response) {
  return {
    type: types.INIT_APPLICATION,
    payload: {...response},
  };
}

