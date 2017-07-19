import React, {Component} from 'react';
import HomePage from './home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as initAction from '../../redux/init/init.action';
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
    this.props.InitAction.initAction();
  }
}
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    InitAction: bindActionCreators(initAction, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
