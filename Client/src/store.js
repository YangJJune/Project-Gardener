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

const appInfo = {
  appName: 'PRJ::GRDNER',
};

// handles static data related to app info
const appNameReducer = (state = appInfo, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// handles login and logout process
const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem('username', JSON.stringify(action.payload.userName));
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

// combine all of reducers used currently
const combinedReducers = combineReducers({
  appNameReducer,
  loginReducer,
});

const store = createStore(combinedReducers);

export default store;
