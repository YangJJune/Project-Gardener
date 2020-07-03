/*******************************************
 * url parameter의 code를 이용해서
 * redux-state의 userInfo.accessToken을 설정한다.
 *******************************************/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import qs from 'qs';
import { loginGH } from '../../helpers/requestHelper';

export default function LoginGH({ location }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const code = qs.parse(location.search.slice(1)).code;
    dispatch(loginGH(code));
  });

  return (
    // redirect to get user information page
    <Redirect to='/' />
  );
}
