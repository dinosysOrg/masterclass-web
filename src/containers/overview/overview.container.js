import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Overview from './overview';
import OverviewNoLogin from './overviewNoLogin';
import {Loading, Sidebar} from '../../components';
/**
 * OverviewContainer of project
 */
class OverviewContainer extends Component {
  checklogin() {
    const {loginStatus} = this.props.payload.userReducer;
    if (loginStatus) {
      return (
        <div className="container">
            <div className="pageTitle">
              <h2 className="pageTitle__title">PATH NAME</h2>
              <p className="pageTitle__sub">LEVEL + INSTRUMENT</p>
            </div>
            <div className="row card-group">
              <div className="col-md-3 col-sidebar pb-5">
                <Sidebar {...this.props} />
              </div>
              <div className="col-md-9 col-pagecontent pb-5">
                <Overview {...this.props}/>
              </div>
            </div>
        </div>
    );
    } else {
      return (<OverviewNoLogin />);
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
export default withRouter(connect(mapStateToProps)(OverviewContainer));
