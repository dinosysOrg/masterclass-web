import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './app.scss';

const divApp = document.createElement('div');

divApp.setAttribute('id', 'app');

document.body.appendChild(divApp);

ReactDOM.render(<App />, document.getElementById('app'));
