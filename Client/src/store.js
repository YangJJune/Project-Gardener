/*************************************************
 * redux의 store, reducer를 정의하는 파일
 * -----------------------------------------------
 * 미완성
 * ## 중요
 *
 * defaultState에 nav bar title 추가
 *************************************************/
import { createStore } from 'redux';

const defaultState = {
  appName: 'PRJ::GRDNER',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
