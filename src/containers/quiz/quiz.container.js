import React, {Component} from 'react';
import Quiz from './quiz';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userAction from '../../redux/user/user.action';
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
   * render QuizContainer template
   * @return {html} The template of HomePageContainer class
   */
  render() {
    console.log(this.props);
    return (
      !this.props.payload.userReducer.quiz ? null : <Quiz {...this.props} />
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
