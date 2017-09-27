import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Overview from './overview';
import OverviewNoLogin from './overviewNoLogin';
import {Sidebar} from '../../components';
import {bindActionCreators} from 'redux';
import * as pathAction from '../../redux/path/path.actions';
import * as initAction from '../../redux/init/init.action';
import {Loading} from '../../components';
/**
 * OverviewContainer of project
 */
class OverviewContainer extends Component {
  componentWillMount() {
    let {path_Id} = this.props.params;
    this.props.pathAction.fetchOverviewPath(Number(path_Id))
  }
  checkSub() {
    let {tasks} = this.props.payload.nprogress;
    if(tasks === 0) {
      return (<Overview {...this.props}/>)
    } else {
      return (<Loading/>)
    }
  }
  checklogin() {
    const {loginStatus} = this.props.payload.userReducer;
    const {pathOverview} = this.props.payload.pathReducer;
    let {tasks} = this.props.payload.nprogress;
    if (loginStatus && pathOverview !== undefined && pathOverview.subscribed === true) {
      return (
        <div className="container-content">
            <div className="pageTitle">
              <h2 className="pageTitle__title">PATH NAME</h2>
              <p className="pageTitle__sub">LEVEL + INSTRUMENT</p>
            </div>
            <div className="row card-group">
              <div className="col-md-3 col-sidebar pb-5">
                <Sidebar {...this.props} />
              </div>
              <div className="col-md-9 col-pagecontent pb-5">
                {this.checkSub()}
              </div>
            </div>
        </div>
    );
    } else {
      return  tasks === 0 && this.props.payload.pathReducer.pathOverview !== undefined ? <OverviewNoLogin {...this.props} /> : <Loading/>
    }
  }
  /**
   * React rendering function
   * @return { Component } - the component
   */
  render() {
    return (
      this.checklogin()
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OverviewContainer));
