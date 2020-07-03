/*******************************************
 * redirection을 관리하는 component
 * URL에 따라 적절한 redriection을 진행한다.
 * 
 * GetGHToken
 * GetUserName
 *******************************************/

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import GetGHToken from './GetGHToken'
import GetUserName from './GetUserName'

function Redirection({ match }) {
  return (
    <Switch>
        <Route path={match.path + '/getGHToken'} component={GetGHToken} />
        <Route path={match.path + '/getUserName'} component={GetUserName} />
    </Switch>
  )
}

export default Redirection