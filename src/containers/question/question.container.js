import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Sidebar} from '../../components';
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
    return (
        <div className="container-content">
          <div className="pageTitle">
            <h2 className="pageTitle__title">Q&A</h2>
            <p className="pageTitle__sub" style={{opacity: 0}}>LEVEL + INSTRUMENT</p>
          </div>
          <div className="row card-group">
            <div className="col-md-3 col-sidebar pb-5">
              <Sidebar {...this.props} />
            </div>
            <div className="col-md-9 col-pagecontent pb-5 pl-5 pt-5">
              <Question {...this.props}/>
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
