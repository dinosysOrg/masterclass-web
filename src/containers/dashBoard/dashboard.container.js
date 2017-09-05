import React, {Component} from 'react';
import DashBoard from './dashboard';
import NoPath from './NoPath';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
/**
 * DashBoardContainer of project
 */
class DashBoardContainer extends Component {
  /**
   * Call api before loading component
   */
  componentWillMount() {
    this.props.userAction.fetchPathRequest();
  }

  /**
   * check my path
   * @return {html}
   */
  checkMyPath() {
    if (this.props.payload.userReducer.hasOwnProperty('myPath')) {
      let recommended = this.props.payload.userReducer.myPath.recommended;
      if (recommended.length === 0) {
        return (
          <NoPath />
        );
      } else {
        return (
          <DashBoard
            {...this.props}
          />
        );
      }
    };
  }
  /**
   * render DashBoardContainer template
   * @return {html} The template of DashBoardContainer class
   */
  render() {
    return (
      <div>
        {this.checkMyPath()}
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
    userAction: bindActionCreators(userAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);

