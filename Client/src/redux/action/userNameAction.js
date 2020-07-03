/********************************************
 * Git-hub user name과 관계된 
 * action, action creator, fetcher를 정의
 *
 * redux-state의 userInfo field와 연관
 * --------------------------------------------
 * FIXME
 * axios 입력을 작성하지 않음
 ********************************************/

import axios from 'axios'

// define action
export const REQUEST_USER_NAME = 'REQUEST_USER_NAME'
export const RECEIVE_USER_NAME = 'RECEIVE_USER_NAME'

// define action creator
const requestUserName = () => {
  return {
    type: REQUEST_USER_NAME,
  }
}
const receiveUserName = (name) => {
  return {
    type: RECEIVE_USER_NAME,
    payload: {
      userName: name,
    },
  }
}

// define fetcher
const fetchUserName = (requestGenerator) => {
  return async (dispatch, getState) => {
    const { accessToken } = getState().userInfo.accessToken
    dispatch(requestUserName());
    const userName = (await axios(requestGenerator(accessToken))).data.login
    dispatch(receiveUserName(userName))
  }
}

export const fetchUserNameIfNotFetching = (requestGenerator) => {
  return (dispatch, getState) => {
    if (getState().userInfo.isFetching === false) {
      return dispatch(fetchUserName(requestGenerator));
    }
  }
}