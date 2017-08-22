import React, {Component} from 'react';
import QuizForm from './quiz_form';

/**
 * Quiz of project
 */
class Quiz extends Component {
  /**
   * render Quiz template
   * @return {html} The template of Quiz class
   */
  render() {
    return (
      <div className="quiz-page">
        <div className="container">
          <h3 className="text-center">Choose one answer in each of the following question to find your own path of learning music. </h3>
          <p>1. Choose your preferred instrument:</p>
          <ul>
            <li>GUITAR</li>
            <li>PIANO</li>
            <li>VOICE</li>
          </ul>

          <QuizForm onSubmit={(values) => console.log(values)} />
        </div>
      </div>
    );
  }
}

export default Quiz;
