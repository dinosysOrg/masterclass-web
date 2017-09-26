import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import {Sidebar} from '../../components';
import Practice from './practice';
import * as initAction from '../../redux/init/init.action';
import * as pathAction from '../../redux/path/path.actions';
import {Loading} from '../../components';
import * as _ from 'lodash';
/**
 * Practice of project
 */
class PracticeContainer extends Component {
  /**
   * ComponentWillMount of the PracticeContainer
   */
  componentWillMount() {
    let {path_Id} = this.props.params;
    this.props.pathAction.fetchPractice(Number(path_Id));
  }

  /**
   * Call api before loading component
   * @return {html} The template of PracticeContainer class
   */
  checkLoading() {
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
          <div className="col-md-9 col-pagecontent pb-5 pl-5 pt-5">
            {_.isEmpty(this.props.payload.pathReducer) ? <Loading/> : <Practice {...this.props}/>}
          </div>
        </div>
      </div>
    );
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
    initAction: bindActionCreators(initAction, dispatch),
    pathAction: bindActionCreators(pathAction, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PracticeContainer));