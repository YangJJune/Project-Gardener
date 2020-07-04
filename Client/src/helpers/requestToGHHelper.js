/*********************************************
 * Git-hub request와 관련된 helper 모음
 *
 * generateLoginUrl
 * loginGH
 * reposListRequestGenerator
 * createGardenRequestGenerator
 * createFileRequestGenerator
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
  `https://github.com/login/oauth/authorize?${stringify({
    client_id: client_id,
    scope: 'repo',
    allow_signup: true,
  })}`;

const GHTokenRequestGenerator = (code) => ({
  baseURL: 'https://cors-anywhere.herokuapp.com/github.com/',
  url: `/login/oauth/access_token`,
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
  url: `/user`,
  method: 'get',
  headers: {
    Authorization: 'token ' + token,
  },
});

export const loginGH = function loginGH(code) {
  return async (dispatch) => {
    await dispatch(fetchGHTokenIfNotFetching(code, GHTokenRequestGenerator))
    await dispatch(fetchUserNameIfNotFetching(userNameRequestGenerator))
  };
};

export const reposListRequestGenerator = (token) => ({
  baseURL: 'https://cors-anywhere.herokuapp.com/api.github.com',
  url: `/user/repos`,
  method: 'get',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token ' + token,
  },
})

export const createGardenRequestGenerator = (token) => ({
  baseURL: 'https://api.github.com',
  url: `/user/repos`,
  method: 'post',
  data: {
    name: 'Garden',
    description: 'for Project-Garden OAuth app',
    private: true,
  },
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token ' + token,
  },
})

export const createFileRequestGenerator = ({
  author, category, title, msg, content, token
  }) => (
  {
    baseURL: 'https://api.github.com',
    url: `/repos/${author}/Garden/contents/${category}/${title}.md`,
    method: 'put',
    data: {
      message: msg,
      content: content,
    },
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + token,
  },
})