/*************************************************
 * redux의 store를 정의하는 파일
 * -----------------------------------------------
 * state 구조
 * state = {
 *   userInfo : {
 *      isLoggedIn : boolean,
 *      isFetching : boolean,
 *      userName : string,
 *      accessToken : string,
 *   },
 *   articleList : {
 *      isFetching : boolean,
 *      articleList : array,
 *   }
 * }
 * 
 * 현재 store를 하나만 사용하고 있지만,
 * userInfo와 articleList를 별도의 store로
 * 나누는 것에 관한 논의가 필요
 *************************************************/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {loginReducer, articleListReducer } from './reducer';

// export store
const rootReducer = combineReducers({
  loginReducer,
  articleListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
