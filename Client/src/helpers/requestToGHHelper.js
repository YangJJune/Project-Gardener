/*********************************************
 * Git-hub request와 관련된 helper 모음
 *
 * generateLoginUrl
 * loginGH
 * -------------------------------------------
 * XXX
 * login scope의 적절성을 고민해봐야 함
 *********************************************/

import stringify from 'qs-stringify';
import { fetchGHTokenIfNotFetching } from '../redux/action/GHTokenAction';
import { fetchUserNameIfNotFetching } from '../redux/action/userNameAction';

const client_id = '70ba6f9a8f3f794fcb4c';
const client_secret = 'c2f3928f26a250f4ec24e1c3cb54016ec3c6929f';

export const generateLoginUrl = () =>
  'https://github.com/login/oauth/authorize?' +
  stringify({
    client_id: client_id,
    scope: 'repo',
    allow_signup: true,
  });

const GHTokenRequestGenerator = (code) => ({
  baseURL: 'https://cors-anywhere.herokuapp.com/github.com/',
  url: '/login/oauth/access_token',
  method: 'post',
  params: {
    client_id: client_id,
    client_secret: client_secret,
    code: code,
  },
  headers: {
    accept: 'application/json',
  },
});

const userNameRequestGenerator = (token) => ({
  baseURL: 'https://cors-anywhere.herokuapp.com/api.github.com',
  url: '/user',
  method: 'get',
  headers: {
    Authorization: 'token ' + token,
  },
});

export const loginGH = function (code) {
  return async (dispatch) => {
    await dispatch(fetchGHTokenIfNotFetching(code, GHTokenRequestGenerator))
    await dispatch(fetchUserNameIfNotFetching(userNameRequestGenerator))
  };
};

const 