import React, {Component} from 'react';
import {connect} from 'react-redux';
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
  * @param {any} props
  */
  constructor(props) {
    super(props);
  }
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initAction: bindActionCreators(initAction, dispatch),
    userAction: bindActionCreators(userAction, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
