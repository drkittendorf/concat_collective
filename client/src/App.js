import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NoMatch from './pages/NoMatch'
import Loading from './components/Loading';
import Nav from './components/Nav'; 
import './App.css'

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='bodyDiv'>
        <Nav/>
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