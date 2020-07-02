/***************************************
 * root component
 **************************************/

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Redirection from './redirection/Redirection';
import Initialize from './initialize/Initialize';
import Home from './home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/redirection' component={Redirection} />
        <Route path='/initialize' component={Initialize} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
