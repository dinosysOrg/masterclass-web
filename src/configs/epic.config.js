import {combineEpics} from 'redux-observable';
import {getBrowsePath, loginRequestEpic, signupRequestEpic, fbRequestEpic,
  myPathRequestEpic, changeEnEpic, changeViEpic, getUserInfoRequestEpic, 
  getQuizRequestEpic, saveQuizEpic, putUserInfoRequestEpic, getHomePath, 
  putUserLayoutEpic, searchPath, overviewPath, getSyllabusDetailEpic, 
  fetchInstrument, fetchCourses, subscribePath, unsubscribePath, fetchOverallPath} from '../redux';
export default combineEpics(
  loginRequestEpic,
  getBrowsePath,
  signupRequestEpic,
  fbRequestEpic,
  myPathRequestEpic,
  changeEnEpic,
  changeViEpic,
  getUserInfoRequestEpic,
  getQuizRequestEpic,
  saveQuizEpic,
  putUserInfoRequestEpic,
  getHomePath,
  putUserLayoutEpic,
  searchPath,
  getSyllabusDetailEpic,
  overviewPath,
  fetchInstrument,
  fetchCourses,
  subscribePath,
  unsubscribePath,
  fetchOverallPath
);
