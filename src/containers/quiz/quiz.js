import React, {Component} from 'react';
import QuizForm from './quiz_form';
import './quiz.style.css';

/**
 * Quiz of project
 */
class Quiz extends Component {
  /**
   * render onSubmit template
   * @param {any} values
   */
  onSubmit(values) {
    const quizMethod = Object.keys(values)
      .filter((value) => value.startsWith('quizMethod'))
      .map((value) => parseInt(value.split('_')[1], 10));
    console.log(quizMethod);
    const data = Object.assign({}, {instrument_id: parseInt(values.quizInstruments, 10)},
      {level_id: parseInt(values.quizLevelRadio, 10)}, {learning_method_ids: quizMethod});
    this.props.userAction.saveQuizRequest(data);
  }
  /**
   * render Quiz template
   * @return {html} The template of Quiz class
   */
  render() {
    return (
      <div className="quiz-page">
        <div className="container">
          <h3 className="text-center">Choose one answer in each of the following question to find your own path of learning music. </h3>
          <QuizForm {...this.props} onSubmit={(values)=>this.onSubmit(values)} />
        </div>
      </div>
    );
  }
}

export default Quiz;
