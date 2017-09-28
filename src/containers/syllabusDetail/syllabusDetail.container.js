import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import SyllabusDetail from './syllabusDetail';
import {bindActionCreators} from 'redux';
import * as syllabusAction from '../../redux/syllabus/syllabus.action';
import {Loading} from '../../components';
import * as _ from 'lodash';
/**
 * SyllabusDetailContainer of project
 */
class SyllabusDetailContainer extends Component {
  /**
   * componentDidMount of SyllabusDetailContainer
   */
  componentWillMount() {
    this.props.syllabusAction.fetchSyllabus(this.props.params);
  }
   /**
   * Call api before loading component
   * @return {html} The template of SyllabusDetailContainer class
   */
  checkLoading() {
    const {path} = this.props.payload.syllabusReducer
    if (!_.isEmpty(this.props.payload.syllabusReducer) && !_.isEmpty(path)) {
      return (
        <SyllabusDetail {...this.props}/>
      );
    } else {
      return (
        <Loading/>
      );
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
    syllabusAction: bindActionCreators(syllabusAction, dispatch),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SyllabusDetailContainer));
