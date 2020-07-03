/*******************************************
 * url parameter의 code를 이용해서
 * redux-state의 userInfo.accessToken을 설정한다.
 *******************************************/

import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {generateGHTokenRequest} from '../../helpers/requestHelper'
import {fetchGHTokenIfNotFetching} from '../../redux/action/GHTokenAction'

function GetGHToken({ fetchGHTokenIfNotFetching, match }) {
  useEffect(() => {
      fetchGHTokenIfNotFetching(match.params['code'], generateGHTokenRequest)
    }
  )

  return (
    // redirect to get user information page
    <Redirect to='/redirection/getUserName' />
  )
}

export default connect(null, {fetchGHTokenIfNotFetching})(GetGHToken)