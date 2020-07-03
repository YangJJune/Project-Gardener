/********************************************
 * article list와 관계된 
 * action, action creator, fetcher를 정의
 *
 * redux-state의 articleList field와 연관
 * --------------------------------------------
 * FIXME
 * axios 입력을 작성하지 않음
 ********************************************/

// define action
export const REQUEST_ARTICLE_LIST = 'REQUEST_ARTICLE_LIST'
export const RECEIVE_ARTICLE_LIST = 'RECEIVE_ARTICLE_LIST'

// define action creator
const requestArticleList = () => {
  return {
    type: REQUEST_ARTICLE_LIST,
  }
}
const receiveArticleList = (list) => {
  return {
    type: RECEIVE_ARTICLE_LIST,
    payload: {
      articleList: list,
    },
  }
}

// define fetcher
import axios from 'axios'

const fetchArticleList = (filter, requestGenerator) => {
  return async (dispatch) => {
    dispatch(requestArticleList())
    const list = (await axios(requestGenerator(filter))).data.list
    dispatch(receiveArticleList(list))
  }
}

export const fetchArticleListIfNotFetching = (filter, requestGenerator) => {
  return (dispatch, getState) => {
    if (getState().articleList.isFetching === false) {
      return dispatch(fetchArticleList(filter, requestGenerator));
    }
  }
}