import * as userTypes from '../user/user.types';
import * as initTypes from '../init/init.types';
import storeConfig from '../../configs/storage.config';
import {push} from 'react-router-redux';
export const userMiddleWare = store => next => action => {
  if(action.type === userTypes.SIGN_OUT){
    storeConfig.clearUserLocal();
    store.dispatch(push('/'));
  }
  if(action.type === userTypes.LOGIN_REQUEST_SUCCESS){
    let json = action.response;
    storeConfig.setUserLocal(json.xhr, json.response.data.name, json.response.data.id, json.response.data.layout_id)
  }
  if(action.type === userTypes.LOGIN_FB_REQUEST_SUCCESS){
    let json = action.response;    
    storeConfig.setUserLocal(json.xhr, json.response.data.name, json.response.data.id, json.response.data.layout_id)    
  }
  if(action.type === userTypes.PUT_USER_LAYOUT_SUCCESS){
    storeConfig.changeLayoutID(store) 
  }
  if(action.type === initTypes.REDIRECT){
    store.dispatch(push(`${action.payload}`));
  }
  if(action.type === userTypes.LOGIN_REQUEST_SUCCESS || action.type === userTypes.SIGNUP_REQUEST_SUCCESS || action.type === userTypes.LOGIN_FB_REQUEST_SUCCESS){
    store.dispatch(push('/Browse'));
  }
  return next(action);
}