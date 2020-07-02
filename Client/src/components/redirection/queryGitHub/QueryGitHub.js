/*******************************************
 * Git Hub REST API Server에 
 * HTTP query한 후, 지정된 페이지로 이동한다.
 * -----------------------------------------
 * XXX
 * 기능 미구현
 *******************************************/

import React, { useEffect } from 'react'
import {Redirect} from 'react-router-dom'

function QueryGitHub() {
  useEffect(() => {
      // query to Git hub API server
      console.log('get data from git hub')
    }
  )

  return (
    // redirect to main page
    <Redirect to='/' />
  )
}

export default QueryGitHub