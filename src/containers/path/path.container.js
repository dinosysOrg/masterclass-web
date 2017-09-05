import React, {Component} from 'react';
import {connect} from 'react-redux';
import PathPage from './path';
// import * as pathAction from '../../redux/path/actions';

// {/* <Route path={`${match.url}/:id`} component={connect(mapStateToProps, {fetchPath})(PathPage)} /> */}
/**
 * This component is responsible for connecting Path Intro page component to
 * redux store and router
 * This component should be the component of <Route> component
 * By this, it can receive the "match" for
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
