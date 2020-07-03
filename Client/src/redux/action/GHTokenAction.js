/********************************************
 * Git-hub access token과 관계된 
 * action, action creator, fetcher를 정의
 *
 * redux-state의 userInfo field와 연관
 * --------------------------------------------
 * FIXME
 * axios 입력을 작성하지 않음
 ********************************************/

import axios from 'axios'

// define action
export const REQUEST_GH_TOKEN = 'REQUEST_GH_TOKEN'
export const RECEIVE_GH_TOKEN = 'RECEIVE_GH_TOKEN'

// define action creator
const requestGHToken = () => {
  return {
    type: REQUEST_GH_TOKEN,
  }
}
const receiveGHToken = (token) => {
  return {
    type: RECEIVE_GH_TOKEN,
    payload: {
      accessToken: token,
    },
  }
}

// define fetcher
const fetchGHToken = (code, requestGenerator) => {
  return async (dispatch) => {
    dispatch(requestGHToken())
    const token = (await axios(requestGenerator(code))).data.access_token
    dispatch(receiveGHToken(token))
  }
}

export const fetchGHTokenIfNotFetching = (code, requestGenerator) => {
  return (dispatch, getState) => {
    if (getState().GHToken.isFetching === false) {
      return dispatch(fetchGHToken(code, requestGenerator))
    }
  }
}