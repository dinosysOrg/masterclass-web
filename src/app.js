import React from 'react';
import {Header, Footer} from './components';
import './assets/stylesheets/style.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as initAction from './redux/init/init.action';
import * as userAction from './redux/user/user.action';
import storeConfig from './configs/storage.config';
import I18n from 'redux-i18n';
import {translations} from './localization/';
import {NProgress} from 'redux-nprogress';
import $ from 'jquery';
window.jQuery = $
require('bootstrap')
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
    }
  }
  componentDidUpdate() {
    window.scrollTo(0,0)
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
    return (
      <I18n translations={translations} initialLang='en'>
        <div>
          <NProgress color="yellow" />
          <Header/>
          {this.props.children}
          <Footer/>
        </div>
      </I18n>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
