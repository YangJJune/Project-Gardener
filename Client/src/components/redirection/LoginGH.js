/*******************************************
 * url parameter의 code를 이용해서
 * redux-state의 userInfo.accessToken을 설정한다.
 * -----------------------------------------
 * note
 * for delayed redirecion, use history not Redirect
 * 만약 Redirect 컴포넌트로 delayed redirection이 
 * 가능한 방법을 찾는다면 알려주길 바람.
 *******************************************/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import qs from 'qs';
import { loginGH } from '../../helpers/requestToGHHelper';

export default function LoginGH({ location, history }) {
  const dispatch = useDispatch();
  const loginAndRedirect = async function loginAndRedirect(){
    const code = qs.parse(location.search.slice(1)).code;
    await dispatch(loginGH(code));
    history.replace('/redirection/checkGarden')
  }

  useEffect(() => {
    loginAndRedirect()
  });

  return (
    // redirect to get user information page
    //<Redirect to='/' />
    <h3>logging in...</h3>
  );
}