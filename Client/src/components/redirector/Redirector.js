/*******************************************
 * redirection을 관리하는 component
 * URL에 따라 적절한 redriection을 진행한다.
 * 
 * router
 * /loginGH
 * /checkGarden
 * /createGarden
 *******************************************/

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginGH from './LoginGH'
import CheckGarden from './CheckGarden'
import CreateGarden from './CreateGarden'

function Redirector({ match }) {
  return (
    <Switch>
        <Route path={match.path + '/loginGH'} component={LoginGH} />
        <Route path={match.path + '/checkGarden'} component={CheckGarden} />
        <Route path={match.path + '/createGarden'} component={CreateGarden} />
    </Switch>
  )
}

export default Redirector