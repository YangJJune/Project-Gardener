/*************************************************
 * redux의 store, reducer를 정의하는 파일
 * -----------------------------------------------
 * 미완성
 * ## 중요
 *
 * defaultState에 nav bar title 추가
 *************************************************/
import { createStore, applyMiddleware } from 'redux'
// action creator can return Promise obj
import thunkMiddleware from 'redux-thunk';

const defaultState = {
  appName: 'PRJ::GRDNER',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUBMIT_ARTICLE':
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
