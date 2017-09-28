import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
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
    let {path_Id} = this.props.params;
    this.props.pathAction.fetchOverviewPath(Number(path_Id))
  }
  /**
   * React rendering function
   * @return { Component } - the component
   */
  render() {
    let {tasks} = this.props.payload.nprogress;
    const {pathOverview} = this.props.payload.pathReducer;
    if(tasks === 0 && pathOverview) {
      return (
        <div className="container-content">
            <div className="pageTitle">
              <h2 className="pageTitle__title">SYLLABUS</h2>
              <p className="pageTitle__sub text-uppercase">{pathOverview.level.name} {pathOverview.instrument.name}</p>
            </div>
            <div className="row card-group">
              <div className="col-md-3 col-sidebar pb-5">
                <Sidebar {...this.props} />
              </div>
              <div className="col-md-9 col-pagecontent pb-5">
                 <Syllabus {...this.props}/> 
              </div>
            </div>
        </div>
      );
    } else {
      return (<Loading/>)
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
    pathAction: bindActionCreators(pathAction, dispatch),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SyllabusContainer));
