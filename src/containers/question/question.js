import React, { Component } from "react";
import QuestionText from './question_text';
import QuestionVideo from './question_video';
class Question extends Component {
  constructor() {
    super();
    this.state = {
      descriptionText: '',
      questionType: 0,
    };
  }

  _handleDescriptionChange(e) {
    this.setState({descriptionText: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="question__title font-weight-bold">
          Submit your question
        </div>
        <div className="question__description">
          <input className="description-input" type="text" 
            value={this.state.searchText} 
            placeholder="Type a short description for your question"
            onChange={this._handleDescriptionChange.bind(this)}/>
        </div>
        <QuestionVideo />
      </div>
    )
  }
}

export default Question;