import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router>
    <Auth0Provider>
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById('root')
);


