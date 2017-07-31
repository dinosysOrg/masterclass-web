import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import PathPage from './path';
import {pathActions} from '../../redux/path';

const {fetchPath} =pathActions;

const mapStateToProps = (state, ownProps) => {
  return {
    path: state.path,
  };
};

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
    const {match} = this.props;
    return (
      <div>
        <Route path={`${match.url}/:id`} component={connect(mapStateToProps, {fetchPath})(PathPage)} />
      </div>
    );
  }
}


export default PathPageContainer;
