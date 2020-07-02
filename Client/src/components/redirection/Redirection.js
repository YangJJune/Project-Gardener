/*******************************************
 * redirection을 관리하는 component
 * URL에 따라 적절한 redriection을 진행한다.
 * 
 * Login
 * QueryGitHub
 * QueryDB
 *******************************************/

import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './login/Login'
import QueryDB from './queryDB/QueryDB'
import QueryGitHub from './queryGitHub/QueryGitHub'

function Redirection({ match }) {
  return (
    <BrowserRouter basename={match.url}>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/queryDB' component={QueryDB} />
            <Route path='/queryGitHub' component={QueryGitHub} />
        </Switch>
    </BrowserRouter>
  )
}

export default Redirection