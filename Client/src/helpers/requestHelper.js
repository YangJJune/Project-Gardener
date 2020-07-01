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
