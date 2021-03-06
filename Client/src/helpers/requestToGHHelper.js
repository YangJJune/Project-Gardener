/*********************************************
 * Git-hub request와 관련된 helper 모음
 *
 * generateLoginUrl
 * GHTokenRequestGenerator
 * userNameRequestGenerator
 * reposListRequestGenerator
 * createGardenRequestGenerator
 * createFileRequestGenerator
 *********************************************/

import stringify from 'qs-stringify';

const client_id = '70ba6f9a8f3f794fcb4c';
const client_secret = 'c2f3928f26a250f4ec24e1c3cb54016ec3c6929f';

export const generateLoginUrl = () =>
  `https://github.com/login/oauth/authorize?${stringify({
    client_id: client_id,
    scope: 'repo',
    allow_signup: true,
  })}`;

export const GHTokenRequestGenerator = (code) => ({
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

export const userNameRequestGenerator = (accessToken) => ({
  baseURL: 'https://cors-anywhere.herokuapp.com/api.github.com',
  url: `/user`,
  method: 'get',
  headers: {
    Authorization: 'token ' + accessToken,
  },
});

export const reposListRequestGenerator = (accessToken) => ({
  baseURL: 'https://cors-anywhere.herokuapp.com/api.github.com',
  url: `/user/repos`,
  method: 'get',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token ' + accessToken,
  },
});

export const createGardenRequestGenerator = (accessToken) => ({
  baseURL: 'https://api.github.com',
  url: `/user/repos`,
  method: 'post',
  data: {
    name: 'Garden',
    description: 'for Project-Garden OAuth app',
    private: true,
    auto_init: true,
  },
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token ' + accessToken,
  },
});

export const createFileRequestGenerator = ({ 
    author, category, title, msg, content, accessToken 
  }) => ({
  baseURL: 'https://api.github.com',
  url: `/repos/${author}/Garden/contents/${category}/${title}.md`,
  method: 'put',
  data: {
    message: msg,
    content: btoa(content),
  },
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: 'token ' + accessToken,
  },
});
