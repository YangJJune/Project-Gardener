import {
  LOGIN,
  LOGOUT,
  LOAD_USERINFO,
  SUBMIT_ARTICLE,
} from '../constants/actionType';

const appInfo = {
  appName: 'PRJ::GRDNER',
};
// handles static data related to app info
export const appNameReducer = (state = appInfo, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const defaultLoginState = {
  isLoggedIn: false,
  userName: null,
};
// handles login and logout process
export const loginReducer = (state = defaultLoginState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(
        'isLoggedIn',
        JSON.stringify(action.payload.isLoggedIn)
      );
      localStorage.setItem('username', JSON.stringify(action.payload.username));
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

const defaultPostState = null;
// 게시물과 관련된 reducer
export const postReducer = (state = defaultPostState, action) => {
  switch (action.type) {
    case SUBMIT_ARTICLE:
      return state;
    default:
      return state;
  }
};

//사용자 정보에 접근하는 reducer
// TODO defaultState 추가

const defaultUserName = {
  userName: null,
  accessToken: null,
};
export const userInfoReducer = (state = defaultUserName, action) => {
  switch (action.type) {
    case LOAD_USERINFO:
      return {
        ...state,
        userName: action.payload.userName,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};
