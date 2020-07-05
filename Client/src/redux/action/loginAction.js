/********************************************
 * Git-hub access token, user name과 관계된
 * action, action creator, fetcher를 정의
 *
 * loginGH
 ********************************************/

import axios from 'axios';
import { 
  GHTokenRequestGenerator, userNameRequestGenerator,
} from '../../helpers/requestToGHHelper';

///////////////////////////////////////////////////////////////
/////////////// associated with Git-hub token /////////////////
///////////////////////////////////////////////////////////////

// define action
export const REQUEST_GH_TOKEN = 'REQUEST_GH_TOKEN';
export const RECEIVE_GH_TOKEN = 'RECEIVE_GH_TOKEN';

// define action creator
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

// define fetcher
const fetchGHToken = (code, requestGenerator) => {
  return async (dispatch) => {
    dispatch(requestGHToken());
    const token = (await axios(requestGenerator(code))).data.access_token;
    dispatch(receiveGHToken(token));
  };
};

const fetchGHTokenIfNotFetching = (code, requestGenerator) => {
  return (dispatch, getState) => {
    if (getState().GHToken.isFetching === false) {
      return dispatch(fetchGHToken(code, requestGenerator));
    }
  };
};

///////////////////////////////////////////////////////////////
////////////////// associated with user name //////////////////
///////////////////////////////////////////////////////////////

// define action
export const REQUEST_USER_NAME = 'REQUEST_USER_NAME';
export const RECEIVE_USER_NAME = 'RECEIVE_USER_NAME';

// define action creator
const requestUserName = () => {
  return {
    type: REQUEST_USER_NAME,
  };
};
const receiveUserName = (name) => {
  return {
    type: RECEIVE_USER_NAME,
    payload: {
      userName: name,
    },
  };
};

// define fetcher
const fetchUserName = (requestGenerator) => {
  return async (dispatch, getState) => {
    const accessToken = getState().GHToken.accessToken;
    dispatch(requestUserName());
    const userName = (await axios(requestGenerator(accessToken))).data.login;
    dispatch(receiveUserName(userName));
  };
};

const fetchUserNameIfNotFetching = (requestGenerator) => {
  return (dispatch, getState) => {
    if (getState().userName.isFetching === false) {
      return dispatch(fetchUserName(requestGenerator));
    }
  };
};

export const loginGH = function loginGH(code) {
  return async (dispatch) => {
    await dispatch(fetchGHTokenIfNotFetching(code, GHTokenRequestGenerator));
    await dispatch(fetchUserNameIfNotFetching(userNameRequestGenerator));
  };
};
