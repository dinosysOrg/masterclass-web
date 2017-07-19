import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './configs/store.config';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
