import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';

const divApp = document.createElement('div');

divApp.setAttribute('id', 'app');

document.body.appendChild(divApp);

const RootHtml = ( ) => (
  <Router>
    <App />
  </Router>
);


ReactDOM.render(<RootHtml />, document.getElementById('app'));
