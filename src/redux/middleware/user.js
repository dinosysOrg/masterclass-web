import * as types from '../user/user.types';
import storeConfig from '../../configs/storage.config';
export const userMiddleWare = store => next => action => {
  if(action.type === types.SIGN_OUT){
    storeConfig.clearUserLocal();
  }
  if(action.type === types.LOGIN_REQUEST_SUCCESS){
    let json = action.response;
    storeConfig.setUserLocal(json.xhr, json.response.data.name, json.response.data.id, json.response.data.layout_id)
  }
  if(action.type === types.LOGIN_FB_REQUEST_SUCCESS){
    let json = action.response;    
    storeConfig.setUserLocal(json.xhr, json.response.data.name, json.response.data.id, json.response.data.layout_id)    
  }
  if(action.type === types.PUT_USER_LAYOUT_SUCCESS){
    storeConfig.changeLayoutID(store) 
  }
  return next(action);
}