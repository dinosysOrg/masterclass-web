import React, {Component} from 'react';
import HomePage from './home';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
import * as pathAction from '../../redux/path/path.actions';
import {Loading} from '../../components';
/**
 * HomePageContainer of project
 */
class HomePageContainer extends Component {
  /**
   * render HomePageContainer template
   * @return {html} The template of HomePageContainer class
   */
  checkLoading() {
    if(this.props.payload.nprogress.tasks === 0) {
      return(
        <HomePage {...this.props}/>
      );
    } else {
      return(
        <Loading/>
      );
    }
  }
  render() {
    return this.checkLoading()
  }
  /**
 * componentWillMount
 */
  componentWillMount() {
    this.props.pathAction.fetchHomePath();
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
