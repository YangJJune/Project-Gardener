/********************************************
 * redux action과 action creator를 정의하는 파일
 *
 * fetch "gethub access token"
 * fetch "user info"
 * fetch "article list"
 * --------------------------------------------
 * FIXME
 * axios 입력을 작성하지 않음
 *
 * TODO
 * fetch GHToken과 fetch UserInfo를 합쳐서
 * 하나의 login함수로 개선
 ********************************************/

import axios from 'axios';

// the action associated with getting "GitHub access token"
export const REQUEST_GH_TOKEN = 'REQUEST_GH_TOKEN';
export const RECEIVE_GH_TOKEN = 'RECEIVE_GH_TOKEN';
export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

const requestGHToken = () => {
  return {
    type: REQUEST_GH_TOKEN,
  };
};
const receiveGHToken = (token) => {
  return {
    type: RECEIVE_GH_TOKEN,
    payload: {
      accessToken: token,
    },
  };
};
const requestUserInfo = () => {
  return {
    type: REQUEST_USER_INFO,
  };
};
const receiveUserInfo = (userName) => {
  return {
    type: RECEIVE_USER_INFO,
    payload: {
      userName: userName,
    },
  };
};

const fetchGHToken = (code, msgGenerator) => {
  return async (dispatch) => {
    dispatch(requestGHToken());
    const token = (await axios(msgGenerator(code))).data.access_token;
    dispatch(receiveGHToken(token));
  };
};

const fetchUserInfo = (msgGenerator) => {
  return async (dispatch, getState) => {
    const { accessToken } = getState().loginReducer;
    dispatch(requestUserInfo());
    const userInfo = await axios(msgGenerator(accessToken));
    dispatch(receiveUserInfo(userInfo.data.login));
  };
};

export const fetchGHTokenIfNotFetching = (code, msgGenerator) => {
  return (dispatch, getState) => {
    if (getState().loginReducer.isFetching === false) {
      return dispatch(fetchGHToken(code, msgGenerator));
    }
  };
};

export const fetchUserInfoIfNotFetching = (msgGenerator) => {
  return (dispatch, getState) => {
    if (getState().loginReducer.isFetching === false) {
      return dispatch(fetchUserInfo(msgGenerator));
    }
  };
};

// TESTME: only network request for retriving [access_token] worked. also need to make sure when it comes to getting username.
export const authorizeByFetching = ({
  code,
  loginMsgGenerator,
  userInfoMsgGenerator,
}) => {
  return (dispatch) => {
    return dispatch(
      fetchGHTokenIfNotFetching(code, loginMsgGenerator)
    ).then(() => dispatch(fetchUserInfoIfNotFetching(userInfoMsgGenerator)));
  };
};

// the action associated with getting "article list"
export const REQUEST_ARTICLE_LIST = 'REQUEST_ARTICLE_LIST';
export const RECEIVE_ARTICLE_LIST = 'RECEIVE_ARTICLE_LIST';

const requestArticleList = () => {
  return {
    type: REQUEST_ARTICLE_LIST,
  };
};
const receiveArticleList = (list) => {
  return {
    type: RECEIVE_ARTICLE_LIST,
    payload: {
      articleList: list,
    },
  };
};

const fetchArticleList = (filter) => {
  return async (dispatch) => {
    dispatch(requestArticleList());
    const list = await axios();
    dispatch(receiveArticleList(list));
  };
};

export const fetchArticleListIfNotFetching = (filter) => {
  return (dispatch, getState) => {
    if (getState().articleList.isFetching === false) {
      return dispatch(fetchArticleList(filter));
    }
  };
};
