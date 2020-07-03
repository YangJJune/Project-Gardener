/*********************************************
 * 각종 helper 모음
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

const generateGHTokenRequest = (code) => ({
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

const generateUserNameRequest = (token) => ({
  baseURL: 'https://cors-anywhere.herokuapp.com/api.github.com',
  url: '/user',
  method: 'get',
  headers: {
    Authorization: 'token ' + token,
  },
});

export const loginGH = function (code) {
  return (dispatch) => {
    return dispatch(
      fetchGHTokenIfNotFetching(code, generateGHTokenRequest)
    ).then(() => dispatch(fetchUserNameIfNotFetching(generateUserNameRequest)));
  };
};

// if filter is set to null, url would be 'articles'
// otherwise, it'd be articles;
export const generateArticleListRequest = (filter) => ({
  baseURl: 'http://localhost:3000',
  url: '/articles',
  params: filter,
});
