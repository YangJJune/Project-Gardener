/*******************************************
 * url parameter의 code를 이용해서
 * redux-state의 userInfo.accessToken을 설정한다.
 *******************************************/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import qs from 'qs';
import { loginGH } from '../../redux/action/login';

export default function LoginGH({ location, history }) {
  const dispatch = useDispatch();
  
  async function loginAndRedirect() {
    const code = qs.parse(location.search.slice(1)).code
    await dispatch(loginGH(code))
    history.replace('/redirection/checkGarden')
  }

  useEffect(() => {
    loginAndRedirect()
  })

  return <h3>logging in...</h3>
}
