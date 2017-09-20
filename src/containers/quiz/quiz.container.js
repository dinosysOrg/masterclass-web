import React, {Component} from 'react';
import Quiz from './quiz';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
import * as initAction from '../../redux/init/init.action';
import {Loading, QuizLoading} from '../../components';
import {withRouter} from 'react-router';
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
      const quizInstruments = quiz.my_quiz ? String(quiz.my_quiz.instrument_id) : '1'
      const quizLevelRadio = quiz.my_quiz ? String(quiz.my_quiz.level_id) : '1'
      const formValue = {
          initialValues: {
            quizInstruments, quizLevelRadio,
          },
      };
      if (quiz.my_quiz.learning_method_ids.length !== 0 ) {
        const newOj = {}
        quiz.my_quiz.learning_method_ids.map((id, index) => 
            newOj[`quizCheckbox_${id}`] = true
        )
        Object.assign(formValue.initialValues, newOj)
      }
      return (
        <Quiz {...formValue} {...this.props}/>
      );
    }
    if (loading === 0 && quizLoading) {
      return (
        <QuizLoading {...this.props}/>
      );
    } else return (<Loading/>);
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
    initAction: bindActionCreators(initAction, dispatch),    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuizContainer));
