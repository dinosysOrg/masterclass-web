import React, {Component} from 'react';
/**
 * QuizLoading of project
 */
class QuizLoading extends Component {
  /**
   * render QuizLoading template
   * @return {html} The template of menu class
   */
  render() {
    return (
      <div className="quiz-loading">
        <div className="loading">
          <div className="loader">
            <div className="Bar" />
            <div className="Bar" />
            <div className="Bar" />
            <div className="Bar" />
            <div className="Bar" />
            <div className="Bar" />
          </div>
        </div>
        <p>
          Stay tuned while we find your personalized music learning path among our video library. You can always come back to this form to refill if
          you want to change your path.
        </p>
      </div>
    );
  }
}

export default QuizLoading;
