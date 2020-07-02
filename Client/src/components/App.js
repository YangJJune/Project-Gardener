/***************************************
 * root component
 **************************************/

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './login/Login';
import Initialize from './initialize/Initialize';
import Home from './home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/initialize' component={Initialize} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
