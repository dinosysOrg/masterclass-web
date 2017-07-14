import React from 'react';
import {Route} from 'react-router-dom';
import {Header, Footer} from './components';
import routes from './routes';
/**
 * Main Class of project
 */
export default class App extends React.Component {
  /**
 * render app
 * @return {html} The template of App class
 */
  render() {
    return (
      <div>
        <Header />
        {routes.map((route) => <Route key={route.path} {...route} />)}
        <Footer />
      </div>
    );
  }
}
