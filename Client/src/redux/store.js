/*************************************************
 * redux의 store를 정의하는 파일
 * 
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
