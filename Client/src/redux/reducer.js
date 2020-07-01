/******************************************
 * redux reducer를 정의하는 파일
 * ----------------------------------------
 * ## 주의 ##
 * 현재 작성된 reducer는 store를 2개로
 * 분리했음을 가정하고 작성됨
 ******************************************/

// the reducer associated with handling login and logout process
import {
  REQUEST_GH_TOKEN,
  RECEIVE_GH_TOKEN,
  REQUEST_USER_INFO,
  RECEIVE_USER_INFO,
} from './action';

// the reducer associated with handling article list
import { REQUEST_ARTICLE_LIST, RECEIVE_ARTICLE_LIST } from './action';

const defaultUserState = {
  isLoggedIn: false,
  isFetching: false,
  userName: 'guest',
  accessToken: 'ghtoken',
};
export const loginReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case REQUEST_GH_TOKEN:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_GH_TOKEN:
      return Object.assign({}, state, {
        isFetching: false,
        accessToken: action.payload.accessToken,
      });
    case REQUEST_USER_INFO:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isFetching: false,
        userName: action.payload.userName,
      });
    default:
      return state;
  }
};

const defaultArticleListState = {
  isFetching: false,
  articleList: [],
};
export const articleListReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLE_LIST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_ARTICLE_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        articleList: action.payload.articleList,
      });
    default:
      return state;
  }
};

/*
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
const loginReducer = (state = defaultUserState, action) => {
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
*/
