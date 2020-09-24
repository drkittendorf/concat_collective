import React from 'react';
import { Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Login from './pages/Login'
=======
import { useAuth0 } from "@auth0/auth0-react";

import PrivateRoute from './components/PrivateRoute'
>>>>>>> 96d806f9816fadce255f7123899de6f9f6cb34c9
import Home from './pages/Home'
import Profile from './pages/Profile'
import NoMatch from './pages/NoMatch'
import Loading from './components/Loading'

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        {/* <Route exact path="/home" component={Home} /> */}
        <PrivateRoute path="/profile" component={Profile} />
        <Route exact path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;