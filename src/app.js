import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {Header, Footer} from './components';
import routes from './routes';
import './app.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as initAction from './redux/init/init.action';
import * as userAction from './redux/user/user.action';
import storeConfig from './configs/storage.config';
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
    this.state = {};
  }
  /**
   * render will mount
   */
  componentWillMount() {
    const dataUser = storeConfig.getUserLocal();
    if (dataUser) {
      this.props.userAction.checkAuth(dataUser);
    } else {
      console.log('chưa đăng nhập !');
    }
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
const mapDispatchToProps = (dispatch) => {
  return {
    initAction: bindActionCreators(initAction, dispatch),
    userAction: bindActionCreators(userAction, dispatch),
  };
};
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
