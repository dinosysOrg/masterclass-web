import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Syllabus from './syllabus';
import {Sidebar} from '../../components';
import {bindActionCreators} from 'redux';
import * as pathAction from '../../redux/path/path.actions';
import {Loading} from '../../components';
/**
 * Syllabus of project
 */
class SyllabusContainer extends Component {
  componentWillMount() {
    let {path_Id} = this.props.match.params;
    this.props.pathAction.fetchOverviewPath(Number(path_Id))
  }
  /**
   * React rendering function
   * @return { Component } - the component
   */
  render() {
    let {tasks} = this.props.payload.nprogress;
    return (
      <div className="container">
          <div className="pageTitle">
            <h2 className="pageTitle__title">SYLLABUS</h2>
            <p className="pageTitle__sub">LEVEL + INSTRUMENT</p>
          </div>
          <div className="row card-group">
            <div className="col-md-3 col-sidebar pb-5">
              <Sidebar {...this.props} />
            </div>
            <div className="col-md-9 col-pagecontent pb-5">
              {tasks === 0 && this.props.payload.pathReducer.pathOverview !== undefined ? <Syllabus {...this.props}/> : <Loading/>}
            </div>
          </div>
      </div>
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
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SyllabusContainer));
