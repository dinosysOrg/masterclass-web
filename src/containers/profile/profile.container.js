import React, {Component} from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
/**
 * ProfileContainer of project
 */
class ProfileContainer extends Component {
  /**
   * Call api before loading component
   */
  componentWillMount() {
    this.props.userAction.fetchUserInfoRequest();
  }
  /**
   * render ProfileContainer template
   * @return {html} The template of ProfileContainer class
   */
  render() {
    return (
      <Profile
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

