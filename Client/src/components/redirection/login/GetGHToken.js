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
import connect from 'react-redux'
import Redirect from 'react-router-dom'
import generateGHTokenRequest from '../../../helpers/requestHelper'
import fetchGHTokenIfNotFetching from '../../../redux/action/GHTokenAction'

function GetGHToken({ fetchGHTokenIfNotFetching }) {
  useEffect(() => {
      fetchGHTokenIfNotFetching(generateGHTokenRequest())
    }
  )

  return (
    // redirect to get user information page
    <Redirect to='/' />
  )
}

export default connect(null, {fetchGHTokenIfNotFetching})(GetGHToken)