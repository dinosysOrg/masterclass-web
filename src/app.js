import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {Header, Footer} from './components';
import routes from './routes';
import './app.scss';
import {connect} from 'react-redux';
/**
 * Main Class of project
 */
class App extends React.Component {
  /**
   * render contructor
   * @param {any} props
   */
  constructor(props) {
    super(props);
  }
  /**
  * @return {html}
  * check loading fuc
  */
  checkLoading() {
    if (this.props.payload.initReducer.showLoading) {
      return (
        <div className="loading-content">
          <div className="loading-center">
            <div className='sk-double-bounce'>
              <div className='sk-child sk-double-bounce-1'/>
              <div className='sk-child sk-double-bounce-2'/>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
  /**
   * render app
   * @return {html} The template of App class
   */
  render() {
    console.log(this.props);
    return (
      <div>
        <Header/>
        {routes.map((route) => <Route key={route.path} {...route} />)}
        <Footer/>
        {this.checkLoading()}
      </div>
    );
  }
}
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  };
};
export default withRouter(connect(mapStateToProps)(App));
