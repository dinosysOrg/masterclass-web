import React, {Component} from 'react';
import Quiz from './quiz';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
import {Loading, QuizLoading} from '../../components';
import {withRouter} from 'react-router-dom';
/**
 * QuizContainer of project
 */
class QuizContainer extends Component {
  /**
   * render QuizContainer template
   */
  componentWillMount() {
    this.props.userAction.fetchQuizRequest();
  }
  /**
   * render checkQuizLoad template
   * @return {html} The template of HomePageContainer class
   */
  checkQuizLoad() {
    const {quiz, quizLoading} = this.props.payload.userReducer;
    const loading = this.props.payload.nprogress.tasks;
    if (loading === 0 && quiz && !quizLoading) {
      return (
        <Quiz {...this.props}/>
      );
    }
    if (loading === 0 && quizLoading) {
      return (
        <QuizLoading {...this.props}/>
      );
    } else return (<Loading></Loading>);
  }
  /**
   * render QuizContainer template
   * @return {html} The template of HomePageContainer class
   */
  render() {
    return (
      this.checkQuizLoad()
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizContainer));
