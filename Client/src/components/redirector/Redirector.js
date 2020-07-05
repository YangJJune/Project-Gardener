/*******************************************
 * redirection을 관리하는 component
 * URL에 따라 적절한 redriection을 진행한다.
 * 
 * router
 * /loginGH
 * /checkGarden
 * /createGarden
 * /deleteArticle
 *******************************************/

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginGH from './LoginGH'
import CheckGarden from './CheckGarden'
import CreateGarden from './CreateGarden'
import DeleteArticle from './DeleteArticle'

function Redirector({ match }) {
  return (
    <Switch>
        <Route path={match.path + '/loginGH'} component={LoginGH} />
        <Route path={match.path + '/checkGarden'} component={CheckGarden} />
        <Route path={match.path + '/createGarden'} component={CreateGarden} />
        <Route path={match.path + '/deleteArticle'} component={DeleteArticle} />
    </Switch>
  )
}

export default Redirector