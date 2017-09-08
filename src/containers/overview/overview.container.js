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
            <div className="row">
              <div className="col-md-3">
                <Sidebar {...this.props} />
              </div>
              <div className="col-md-9">
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
