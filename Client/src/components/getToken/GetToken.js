import React, { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { fetchIfNotFetching } from '../../middleware';

import { LOAD_USERINFO } from '../../constants/actionType';

function Home({ history, location }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        // const request = {
        //   url: '/login/oauth/access_token',
        //   method: 'post',
        //   baseURL: 'https://cors-anywhere.herokuapp.com/github.com/',
        //   params: {
        //     client_id: '543812307a50747ce819',
        //     client_secret: 'abf2475dbb515a7d50590dc42e9d5517f0cee774',
        //     code,
        //   },
        //   headers: {
        //     accept: 'application/json',
        //   },
        // };

        // fetchIfNotFetching(request);
        let response = await axios({
          url: '/login/oauth/access_token',
          method: 'post',
          baseURL: 'https://cors-anywhere.herokuapp.com/github.com/',
          params: {
            client_id: '543812307a50747ce819',
            client_secret: 'abf2475dbb515a7d50590dc42e9d5517f0cee774',
            code,
          },
          headers: {
            accept: 'application/json',
          },
        });

        const accessToken = response.data.access_token;
        console.log(accessToken);
        const user = await axios({
          baseURL: 'https://api.github.com',
          url: '/user',
          method: 'get',
          headers: {
            Authorization: 'token ' + accessToken,
          },
        });

        const userName = user.data.login;
        console.log(userName);
        dispatch({
          type: LOAD_USERINFO,
          payload: { userName: userName, accessToken: accessToken },
        });
        history.push('/articles');
      } catch (error) {
        history.push('/error');
      }
    }

    getToken();
  }, [location, history, dispatch]);

  return <h2>Loading...</h2>;
}

export default Home;
