import React from 'react';
import { Route, Switch } from "react-router-dom";

import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NoMatch from './pages/NoMatch'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;