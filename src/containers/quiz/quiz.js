import React, {Component} from 'react';
import * as _ from 'lodash';
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
    let splitData = _.pickBy(values, (value) => value === true);
    let checkboxArray = [];
    _.map(splitData, (key, id)=>{
      let value = _.trimStart(id, 'quizCheckbox_')
      checkboxArray.push(parseInt(value, 10))
    })
    const data = Object.assign({},{instrument_id: parseInt(values.quizInstruments, 10)},{level_id: parseInt(values.quizLevelRadio, 10)},{learning_method_ids: checkboxArray});
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
          <h3 className="text-center quiz-page__title">Choose one answer in each of the following question to find your own<br/> path of learning music. </h3>
          <QuizForm {...this.props} onSubmit={(values)=>this.onSubmit(values)} />
        </div>
      </div>
    );
  }
}

export default Quiz;
