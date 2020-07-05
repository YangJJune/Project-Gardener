/********************************************
 * article list와 관계된
 * action, action creator, fetcher를 정의
 ********************************************/

import axios from 'axios';

// define action
export const REQUEST_ARTICLE_LIST = 'REQUEST_ARTICLE_LIST';
export const RECEIVE_ARTICLE_LIST = 'RECEIVE_ARTICLE_LIST';

// define action creator
const requestArticleList = () => {
  return {
    type: REQUEST_ARTICLE_LIST,
  };
};
const receiveArticleList = (articleList) => {
  return {
    type: RECEIVE_ARTICLE_LIST,
    payload: {
      articleList: articleList,
    },
  };
};

// define fetcher
const fetchArticleList = (filter, requestGenerator) => {
  return async (dispatch) => {
    dispatch(requestArticleList());
    const articleList = (await axios(requestGenerator(filter))).data.list;
    dispatch(receiveArticleList(articleList));
  };
};

export const fetchArticleListIfNotFetching = (filter, requestGenerator) => {
  return (dispatch, getState) => {
    if (getState().articleList.isFetching === false) {
      return dispatch(fetchArticleList(filter, requestGenerator));
    }
  };
};
