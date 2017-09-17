import React, {Component} from 'react';
import HomePage from './home';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
import * as pathAction from '../../redux/path/path.actions';
/**
 * HomePageContainer of project
 */
class HomePageContainer extends Component {
  /**
   * render HomePageContainer template
   * @return {html} The template of HomePageContainer class
   */
  render() {
    return <HomePage {...this.props}/>;
  }
  /**
 * componentDidMount of HomePageContainer
 */
  componentDidMount() {
    // this.props.userAction.fetchUser();
    if(!this.props.payload.pathReducer.hasOwnProperty('paths')) {
      this.props.pathAction.fetchHomePath();
    }
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
    pathAction: bindActionCreators(pathAction, dispatch),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePageContainer));
