/******************************************
 * redux reducer를 정의하는 파일
 * ----------------------------------------
 * ## 주의 ##
 * 현재 작성된 reducer는 store를 2개로
 * 분리했음을 가정하고 작성됨
 * -> 수정 필요
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
  userName: null,
  accessToken: null,
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
