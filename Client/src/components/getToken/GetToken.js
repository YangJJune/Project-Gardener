import React, { useEffect } from 'react';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { authorizeByFetching } from '../../redux/action';
import {
  loginMsgGenerator,
  userInfoMsgGenerator,
} from '../../helpers/requestHelper';

function Home({ history, location }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const { code } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    console.log(code);
    dispatch(
      authorizeByFetching({ code, loginMsgGenerator, userInfoMsgGenerator })
    );
    history.push('./articles');
  });
  //   async function getToken() {
  //     const { code } = qs.parse(location.search, {
  //       ignoreQueryPrefix: true,
  //     });

  //     try {
  //       let response = await axios({

  //         params: {
  //           client_id: '543812307a50747ce819',
  //           client_secret: 'abf2475dbb515a7d50590dc42e9d5517f0cee774',
  //           code,
  //         },

  //       const accessToken = response.data.access_token;
  //       console.log(accessToken);
  //       const user = await axios({
  //         baseURL: 'https://api.github.com',
  //         url: '/user',
  //         method: 'get',
  //         headers: {
  //           Authorization: 'token ' + accessToken,
  //         },
  //       });

  //       const userName = user.data.login;
  //       console.log(userName);
  //       dispatch({
  //         type: LOAD_USERINFO,
  //         payload: { userName: userName, accessToken: accessToken },
  //       });
  //       history.push('/articles');
  //     } catch (error) {
  //       history.push('/error');
  //     }
  //   }

  //   getToken();
  // }, [location, history, dispatch]);

  return <h2>Loading...</h2>;
}

export default Home;
