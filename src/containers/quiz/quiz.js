import React, {Component} from 'react';
import QuizForm from './quiz_form';

/**
 * Quiz of project
 */
class Quiz extends Component {
  /**
   * constructor QuizForm
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      color: 'Guitar',
    };
  }
  /**
   * render onSubmit template
   * @param {any} values
   */
  onSubmit(values) {
    const data = Object.assign({mot: this.state.color}, {instruments: this.state.color}, {checkbox: [values]});
    console.log(data);
  }
  /**
   * render Quiz template
   * @return {html} The template of Quiz class
   */
  render() {
    const {quiz} = this.props.payload.userReducer;
    console.log(quiz);
    return (
      <div className="quiz-page">
        <div className="container">
          <h3 className="text-center">Choose one answer in each of the following question to find your own path of learning music. </h3>
          <p>1. Choose your preferred instrument:</p>
          <ul>
            {quiz.instruments.map((quizIntruments, index) =>
              <li key={index}>{quizIntruments.name}</li>
            )}
          </ul>
          <QuizForm {...this.props} onSubmit={(values)=>this.onSubmit(values)} />
        </div>
      </div>
    );
  }
}

export default Quiz;
