import React, {Component} from 'react';
import Browse from './browse';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pathAction from '../../redux/path/path.actions';

/**
 * BrowseContainer of project
 */
class BrowseContainer extends Component {
  /**
   * Call api before loading component
   */
  componentWillMount() {
    this.props.pathAction.fetchBrowsePathRequest();
  }
  /**
   * render BrowseContainer template
   * @return {html} The template of BrowseContainer class
   */
  render() {
    return (
      <Browse
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
const mapDispatchToProps = (dispatch) => {
  return {
    pathAction: bindActionCreators(pathAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);

