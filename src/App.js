import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

function App() {
  return (
     <Router>
     <div>
       <Switch>
         <Route exact path={["/", "/login"]} component={Login} />
         <Route exact path={["/home"]} component={Home} />
         <Route exact path="/*" component={NoMatch} />
       </Switch>
     </div>
   </Router>
  );
}

export default App;










