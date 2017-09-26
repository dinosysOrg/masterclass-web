import React, {Component} from 'react';
import Browse from './browse';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import * as pathAction from '../../redux/path/path.actions';
import * as initAction from '../../redux/init/init.action';
import {Loading} from '../../components';

/**
 * BrowseContainer of project
 */
class BrowseContainer extends Component {
  /**
   * Call api before loading component
   */
  componentWillMount() {
    this.props.pathAction.fetchBrowsePath();
  }
  /**
   * Call api before loading component
   * @return {html} The template of ProfileContainer class
   */
  checkLoading() {
    const {paths} = this.props.payload.pathReducer;
    const {tasks} = this.props.payload.nprogress;
    if (tasks === 0 && paths !== undefined) {
      return (
        <Browse {...this.props} />
      );
    } else {
      return (
        <Loading/>
      );
    }
  }
  /**
   * render BrowseContainer template
   * @return {html} The template of BrowseContainer class
   */
  render() {
    return (
      this.checkLoading()
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
    pathAction: bindActionCreators(pathAction, dispatch),
    initAction: bindActionCreators(initAction, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrowseContainer));

