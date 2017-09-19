import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Sidebar} from '../../components';
import {Loading} from '../../components';
import Question from './question';
import './question.style.css';
/**
 * Question of project
 */
class QuestionContainer extends Component {
  /**
   * React rendering function
   * @return { Component } - the component
   */
  render() {
    let {tasks} = this.props.payload.nprogress;
    return (
        <div className="container">
          <div className="pageTitle">
            <h2 className="pageTitle__title">SYLLABUS</h2>
            <p className="pageTitle__sub">LEVEL + INSTRUMENT</p>
          </div>
          <div className="row card-group">
            <div className="col-md-3 col-sidebar pb-5">
              <Sidebar {...this.props} />
            </div>
            <div className="col-md-9 col-pagecontent pb-5 pl-5 pt-5">
              <Question/>
            </div>
          </div>
      </div>
    );
  }
}
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  };
};

export default withRouter(connect(mapStateToProps)(QuestionContainer));
