import {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import storageConfig from '../../configs/storage.config';
import {bindActionCreators} from 'redux';
import * as initAction from '../../redux/init/init.action';

/**
 * BrowseContainer of project
 */
class NonAuthenticateContainer extends Component {
  componentDidMount() {
    if (storageConfig.getUserLocal()) {
      this.props.initAction.redirect('/Browse');
    }
  }
  /**
   * render NonAuthenticateContainer template
   * @return {html} The template of NonAuthenticateContainer class
   */
  render() {
    if (!storageConfig.getUserLocal()) {
      return this.props.children
    } else {
      return null
    }
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
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NonAuthenticateContainer));

