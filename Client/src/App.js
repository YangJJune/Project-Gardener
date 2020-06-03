import React from 'react';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/login" component = {Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;