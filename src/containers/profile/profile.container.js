import React, {Component} from 'react';
import Profile from './profile';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
import {Loading, Sidebar} from '../../components';
import {withRouter} from 'react-router';
/**
 * ProfileContainer of project
 */
class ProfileContainer extends Component {
  /**
   * Call api before loading component
   */
  componentWillMount() {
    this.props.userAction.fetchUserInfoRequest();
  }
  /**
   * Call api before loading component
   * @return {html} The template of ProfileContainer class
   */
  checkLoading() {
    if (this.props.payload.nprogress.tasks === 0) {
      return (
        <div className="container">
            <div className="pageTitle">
              <h2 className="pageTitle__title text-uppercase">Profile</h2>
              <p className="pageTitle__sub text-uppercase">Personal Information</p>
            </div>
            <div className="row card-group">
              <div className="col-md-3 col-sidebar pb-5">
                <Sidebar {...this.props} />
              </div>
              <div className="col-md-9 col-pagecontent profile-page pb-5">
                 <Profile {...this.props}/>
              </div>
            </div>
        </div>
      );
    } else {
      return (
        <Loading/>
      );
    }
  }
  /**
   * render ProfileContainer template
   * @return {html} The template of ProfileContainer class
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
    userAction: bindActionCreators(userAction, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));

