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
 *************************************************/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginReducer, articleListReducer } from './reducer';

// export store
const rootReducer = combineReducers({
  loginReducer,
  articleListReducer,
});

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//enable debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
