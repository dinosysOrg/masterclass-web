import React, { Component } from "react";
import QuestionText from './question_text';

class Question extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <QuestionText />
      </div>
    )
  }
}

export default Question;