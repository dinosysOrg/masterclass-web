import React from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
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
import {Home, Browse, Profile, DashBoard, Overview, MyPath, Syllabus, SyllabusDetail} from './containers';
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
   * 
  * @param {html} component
  * @return {html} 
  * check loading fuc
  */
  checkAuthenticate(component) {
    return storeConfig.getUserLocal() ? React.createElement(component) : <Redirect to='/' />;
  }
  checkRedirectBrowse(component) {
    return storeConfig.getUserLocal() ? <Redirect to='/Browse' /> : React.createElement(component);
  }
  /**
   * render app
   * @return {html} The template of App class
   */
  render() {
    return (
      <I18n translations={translations} initialLang='en'>
        <div>
          <NProgress color="yellow"/>
          <Header/>
          <Switch>
            <Route exact path="/" render={() => this.checkRedirectBrowse(Home)} />
            <Route key="/Browse" path="/Browse" render={() => this.checkAuthenticate(Browse)} />
            <Route key="/Profile" path="/Profile" render={() => this.checkAuthenticate(Profile)} />
            <Route key="/Dashboard" path="/Dashboard" render={() => this.checkAuthenticate(DashBoard)} />
            <Route key="/MyPath" path="/MyPath" render={() => this.checkAuthenticate(MyPath)} />
            <Route exact key="/Overview" path="/Path/:path_Id/" component={Overview}/>
            <Route exact key="/Syllabus" path="/Path/:path_Id/Syllabus" render={() => this.checkAuthenticate(Syllabus)} />
            <Route key="/SyllabusDetail" path="/Path/:path_Id/Syllabus/:syllabus_Id" render={() => this.checkAuthenticate(SyllabusDetail)} />
          </Switch>
          <Footer/>
          {this.checkLoading()}
        </div>
      </I18n >
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
