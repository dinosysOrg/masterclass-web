import React, { Component } from 'react';

class QuestionSelect extends Component {
  constructor() {
    super();
    this.state = {
      contentText: '',
    }
  }

  _handleContentChange(e) {
    this.setState({contentText: e.target.value});
  }

  _handleSubmit() {
    //TODO
  }

  _handleCancel() {
    //TODO
  }


  render() {
    let remain = maxLength - this.state.contentText.length;
    return (
      <div className="question-select">
        <div className="question-select__content">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default QuestionSelect;