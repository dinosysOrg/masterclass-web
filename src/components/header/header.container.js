import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as initAction from '../../redux/init/init.action';
import * as userAction from '../../redux/user/user.action';
import Header from './header';
/**
* Header of project
*/
class HeaderContainer extends Component {
  /**
  * render Header
  * @return {html} The template of Header class
  */
  render() {
    return (
      <Header
        {...this.props}
      />
    );
  }
}
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
    lang: rootState.i18nState.lang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initAction: bindActionCreators(initAction, dispatch),
    userAction: bindActionCreators(userAction, dispatch),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
