import React, { Component } from 'react';

class QuestionVideo extends Component {
  constructor() {
    super();
    this.state = {
      video: null,
      descriptionText: '',
    };
  }

  _handleDescriptionChange(e) {
    this.setState({descriptionText: e.target.value});
  }


  _handleSubmit() {
    //TODO
  }

  _handleCancel() {
    //TODO
  }

  _handleBrowse(e) {
    let file = e.target.files[0];
    this.setState({video: file});
  }

  render() {
    let disabled = this.state.video ? false : true;
    return (
      <div className="question-video">
        <div className="question__title font-weight-bold">
          Submit your question
        </div>
        <div className="question__description">
          <input className="description-input" type="text" 
            value={this.state.searchText} 
            placeholder="Type a short description for your question"
            onChange={this._handleDescriptionChange.bind(this)}/>
        </div>
        <div className="question-video__content mb-4">
          <button
            className="btn btn-fb btn-primary rounded-0 btn-login-fb"
          >
            BROWSE VIDEO FILE
          </button>
          <input type="file" accept='video/*'
            onChange={this._handleBrowse.bind(this)}/>
        </div>
        <div className="question-text__button">
          <button
            type="button"
            disabled={disabled}
            className="btn btn-primary text-uppercase"
            onClick={this._handleSubmit.bind(this)}
          >
            SUBMIT
          </button>
          <button
            type="button"
            className="btn btn-second text-uppercase"
            onClick={this._handleCancel.bind(this)}
          >
            CANCEL
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionVideo;
