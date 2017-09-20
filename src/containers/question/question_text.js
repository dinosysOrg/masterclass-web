import React, { Component } from 'react';

const maxLength = 800;
class QuestionText extends Component {
  constructor() {
    super();
    this.state = {
      contentText: '',
      descriptionText: '',
    }
  }

  _handleDescriptionChange(e) {
    this.setState({descriptionText: e.target.value});
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
      <div className="question-text">
        <div className="question__title font-weight-bold">
          Submit your question
        </div>
        <div className="question__description">
          <input className="description-input" type="text" 
            value={this.state.searchText} 
            placeholder="Type a short description for your question"
            onChange={this._handleDescriptionChange.bind(this)}/>
        </div>
        <div className="question-text__content">
          <textarea ref="content" 
            className="content-input" rows="12"
            value={this.state.contentText}
            placeholder="Type your question"
            maxLength="800"
            onChange={this._handleContentChange.bind(this)}/>
          <span className="question-text__remain">{remain}</span>
        </div>
        <div className="question-text__button">
          <button type="button" className="btn btn-primary text-uppercase"
            onClick={this._handleSubmit.bind(this)}>SUBMIT</button>
          <button type="button" className="btn btn-second text-uppercase"
            onClick={this._handleCancel.bind(this)}>CANCEL</button>
        </div>
      </div>
    );
  }
}

export default QuestionText;