/*******************************************
 * code parameter로 access_token을 가져오고,
 * user 정보를 가져오는 컴포넌트
 * 로그인 과정을 총괄한다.
 * -----------------------------------------
 * FIXME
 * Login 기능 미구현
 * 
 * FIXME
 * redux store에 connection되지 않음
 *******************************************/

import React, { useEffect } from 'react'
import {Redirect} from 'react-router-dom'

function Login({ history, location }) {
  useEffect(() => {
      // 로그인 진행
      console.log('login is ended')
    }
  )

  return (
    // redirect to main page
    <Redirect to='/' />
  )
}

export default Login