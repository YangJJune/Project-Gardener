/***************************************
 * root component
 * 
 * router
 * /redirection
 * /initialize
 * /
 **************************************/

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Redirector from './redirector/Redirector'
import Initializer from './initializer/Initializer'
import Home from './home/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/redirection' component={Redirector} />
        <Route path='/initialize' component={Initializer} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App