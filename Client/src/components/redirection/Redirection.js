/*******************************************
 * redirection을 관리하는 component
 * URL에 따라 적절한 redriection을 진행한다.
 * 
 * LoginGH
 *******************************************/

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginGH from './LoginGH'

function Redirection({ match }) {
  return (
    <Switch>
        <Route path={match.path + '/loginGH'} component={LoginGH} />
    </Switch>
  )
}

export default Redirection