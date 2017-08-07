import React, {Component} from 'react';
import HomePage from './home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
/**
 * HomePageContainer of project
 */
class HomePageContainer extends Component {
  /**
   * render HomePageContainer template
   * @return {html} The template of HomePageContainer class
   */
  render() {
    return <HomePage />;
  }
  /**
 * componentDidMount of HomePageContainer
 */
  componentDidMount() {
    // this.props.userAction.fetchUser();
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
