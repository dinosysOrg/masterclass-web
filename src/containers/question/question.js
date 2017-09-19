import React, { Component } from "react";
import QuestionText from './question_text';
import QuestionVideo from './question_video';
class Question extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <QuestionVideo />
      </div>
    )
  }
}

export default Question;