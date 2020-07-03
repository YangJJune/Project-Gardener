/*******************************************
 * redux-state의 
 * userInfo.accessToken을 이용해
 * userInfo.userName을 설정한다.
 *******************************************/

import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {generateUserNameRequest} from '../../helpers/requestHelper'
import {fetchUserNameIfNotFetching} from '../../redux/action/userNameAction'

function GetUserName() {
  useEffect(() => {
        fetchUserNameIfNotFetching(generateUserNameRequest)
    }
  )

  return (
    // redirect to main page
    <Redirect to='/' />
  )
}

export default connect(null, { fetchUserNameIfNotFetching })(GetUserName)