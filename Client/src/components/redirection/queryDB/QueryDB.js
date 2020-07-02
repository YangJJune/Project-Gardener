/*******************************************
 * Project-Gardener REST API Server에 
 * HTTP query한 후, 지정된 페이지로 이동한다.
 * -----------------------------------------
 * XXX
 * 기능 미구현
 *******************************************/

import React, { useEffect } from 'react'
import {Redirect} from 'react-router-dom'

function QueryDB() {
  useEffect(() => {
      // query to REST API server
      console.log('get data from REST API server')
    }
  )

  return (
    // redirect to main page
    <Redirect to='/' />
  )
}

export default QueryDB