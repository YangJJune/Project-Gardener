/*********************************************
 * axios request obj를 generator하는 helper들을 정의
 * 
 * generateLoginUrl  (axios가 아닌 url 제작 용)
 * generateGHTokenRequest
 *********************************************/

import stringify from 'qs-stringify'

const client_id = '543812307a50747ce819'
const client_secret = 'abf2475dbb515a7d50590dc42e9d5517f0cee774'

export const generateLoginUrl = 
  function generateLoginUrl(){
    return 'https://github.com/login/oauth/authorize?' 
      + stringify(
        {
          client_id: '543812307a50747ce819',
          redirect_url: 'http://localhost:3000/',
          scope: 'repo',
          allow_signup: true,
        }
      )
    }

export const generateGHTokenRequest = 
  function generateGHTokenRequest(code){
    return {
      baseURL: 'https://github.com',
      url: '/login/oauth/access_token',
      method: 'post',
      params:{
          client_id: client_id,
          client_secret: client_secret,
          code: code,
          redirect_url: 'http://localhost:3000/',
      },
      headers: {
          accept: 'application/json',
      }
    }
  }

export const generateUserNameRequest = 
  function generateUserNameRequest(accessToken){
    return {
      baseURL: 'https://api.github.com',
      url: '/user',
      method: 'get',
      headers:{
          Authorization: 'token ' + accessToken
      }
    }
  }

/*
const loginRequestBody = {
  url: '/login/oauth/access_token',
  method: 'post',
  baseURL: 'https://cors-anywhere.herokuapp.com/github.com/',
};
export const loginMsgGenerator = (code) => ({
  ...loginRequestBody,
  params: {
    client_id: '543812307a50747ce819',
    client_secret: 'abf2475dbb515a7d50590dc42e9d5517f0cee774',
    code: code,
  },
  headers: {
    accept: 'application/json',
  },
});

const userInfoRequestBody = {
  baseURL: 'https://api.github.com',
  url: '/user',
  method: 'get',
};

export const userInfoMsgGenerator = (accessToken) => ({
  ...userInfoRequestBody,
  headers: {
    Authorization: 'token ' + accessToken,
  },
});

// TESTME: only network request for retriving [access_token] worked. also need to make sure when it comes to getting username.
export const authorizeByFetching = ({
  code,
  loginMsgGenerator,
  userInfoMsgGenerator,
}) => {
  return (dispatch) => {
    return dispatch(fetchGHTokenIfNotFetching(code, loginMsgGenerator))
      .then(() => dispatch(fetchUserInfoIfNotFetching(userInfoMsgGenerator)))
      .catch((errorMsg) => console.error(errorMsg));
  };
};
*/