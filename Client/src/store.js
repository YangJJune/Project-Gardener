/*************************************************
 * redux의 store, reducer를 정의하는 파일
 * -----------------------------------------------
 * 미완성
 * ## 중요
 *
 * defaultState에 nav bar title 추가
 *************************************************/
import { createStore, combineReducers } from 'redux';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  appName: 'PRJ::GRDNER',
};

const appNameReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem('userName', JSON.stringify(action.payload.userName));
      console.log(action.payload.isLoggedIn);
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userName: action.payload.userName,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isLoggedIn: false,
        userName: null,
      };
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  appNameReducer,
  loginReducer,
});

const store = createStore(combinedReducers);

export default store;
