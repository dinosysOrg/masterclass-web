import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SyllabusDetail from './syllabusDetail';
/**
 * SyllabusDetailContainer of project
 */
class SyllabusDetailContainer extends Component {
  /**
   * React rendering function
   * @return { Component } - the component
   */
  render() {
    return (
      <SyllabusDetail />
    );
  }
}
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  };
};
export default withRouter(connect(mapStateToProps)(SyllabusDetailContainer));
