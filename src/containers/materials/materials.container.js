import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Materials from './materials';
import {Sidebar} from '../../components';
import {bindActionCreators} from 'redux';
import * as pathAction from '../../redux/path/path.actions';
/**
 * OverviewContainer of project
 */
class MaterialsContainer extends Component {
  componentWillMount() {
  }
  checkLoading() {
    console.log(this.props)
    return(
      <div className="container">
          <div className="pageTitle">
            <h2 className="pageTitle__title">MATERIALS</h2>
            <p className="pageTitle__sub">LEVEL + INSTRUMENT</p>
          </div>
          <div className="row card-group">
            <div className="col-md-3 col-sidebar pb-5">
              <Sidebar {...this.props} />
            </div>
            <div className="col-md-9 col-pagecontent pb-5">
              <Materials {...this.props} />
            </div>
          </div>
      </div>
    )
  }
  /**
   * React rendering function
   * @return { Component } - the component
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
    pathAction: bindActionCreators(pathAction, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MaterialsContainer));
