import React, {Component} from 'react';
import ModalAuth from './modal_auth';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
import * as initAction from '../../redux/init/init.action';
/**
* Modal of project
*/
class ModalAuthContainer extends Component {
  /**
   * render contructor
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * render Modal
   * @return {html} The template of Footer class
   */
  render() {
    return (
      <ModalAuth
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
    userAction: bindActionCreators(userAction, dispatch),
    initAction: bindActionCreators(initAction, dispatch),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalAuthContainer));
