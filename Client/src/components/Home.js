import React, { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { fetchHttp } from '../action';
import { fetchIfNotFetching } from '../middleware';

function Home({ history, location, fetchHttp }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const { code } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
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

        const { access_token } = response.data;
        console.log(access_token);
        const user = await axios({
          baseURL: 'https://api.github.com',
          url: '/user',
          method: 'get',
          headers: {
            Authorization: 'token ' + access_token,
          },
        });

        const username = user.data.login;
        console.log(username);
        dispatch({ type: 'LOAD_USERNAME', payload: { username: username } });
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
