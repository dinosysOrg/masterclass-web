import React, {Component} from 'react';
import Quiz from './quiz';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
import {QuizLoading} from '../../components';
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
    if (this.props.payload.userReducer.quiz && !this.props.payload.userReducer.quizLoading) {
      return <Quiz {...this.props} />;
    }
    if (this.props.payload.userReducer.quizLoading) {
      return <QuizLoading></QuizLoading>;
    } else return null;
  }
  /**
   * render QuizContainer template
   * @return {html} The template of HomePageContainer class
   */
  render() {
    return (
      <div>
        {this.checkQuizLoad()}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
