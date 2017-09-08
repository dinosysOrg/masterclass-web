import React, {Component} from 'react';
import {connect} from 'react-redux';
import PathPage from './path';
// {/* <Route path={`${match.url}/:id`} component={connect(mapStateToProps, {fetchPath})(PathPage)} /> */}
/**
 * PathPageContainer
 */
class PathPageContainer extends Component {
  /**
   * React rendering function
   * @return { Component } - the component
   */
  render() {
    return (
      <PathPage
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
export default connect(mapStateToProps)(PathPageContainer);
