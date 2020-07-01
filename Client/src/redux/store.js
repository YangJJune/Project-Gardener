/*************************************************
 * redux의 store, reducer를 정의하는 파일
 * -----------------------------------------------
 * 미완성
 * ## 중요
 *
 * defaultState에 nav bar title 추가
 *************************************************/
import { createStore, combineReducers, applyMiddleware } from 'redux';
// action creator can return Promise obj
import {
  appNameReducer,
  loginReducer,
  postReducer,
  userInfoReducer,
} from './reducer';
import thunkMiddleware from 'redux-thunk';

// export store
const rootReducer = combineReducers({
  appNameReducer,
  loginReducer,
  postReducer,
  userInfoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
