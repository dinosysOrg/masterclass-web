import React, {Component} from 'react';
import ModalAuth from './modal_auth';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
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
    const {userAction} = this.props;
    return (
      <ModalAuth
        {...this.props}
        payload={this.props.payload}
        userAction={userAction}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalAuthContainer);
