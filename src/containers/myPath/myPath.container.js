import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyPathPage from './myPath';
/**
 * PathPageContainer
 */
class MyPathPageContainer extends Component {
  /**
   * React rendering function
   * @return { Component } - the component
   */
  render() {
    return (
      <MyPathPage
        {...this.props}
      />
    );
  }
}
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  };
};
export default connect(mapStateToProps)(MyPathPageContainer);
