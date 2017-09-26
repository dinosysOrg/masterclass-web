import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pathAction from '../../redux/path/path.actions';
import * as initAction from '../../redux/init/init.action';
import MyPathPage from './myPath';
import {Loading} from '../../components';
/**
 * PathPageContainer
 */
class MyPathPageContainer extends Component {
  componentWillMount() {
      this.props.pathAction.fetchInstrument();
      this.props.pathAction.fetchOverallProgress(1)
      this.props.pathAction.fetchMyCourses();
      
  }
  checkLoading() {
    const {showLoading} = this.props.payload.initReducer
    const {listInstrument, myCourses, overallProgress} = this.props.payload.pathReducer
    if (!showLoading && listInstrument !== undefined && myCourses !== undefined && overallProgress !== undefined) {
      return (
        <MyPathPage
          {...this.props}
        />
      )
    } else {
      return (
        <Loading/>
      )
    }
  }
  /**
   * React rendering function
   * @return { Component } - the component
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
export default connect(mapStateToProps, mapDispatchToProps)(MyPathPageContainer);
