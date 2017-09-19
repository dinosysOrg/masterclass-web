import React, { Component } from 'react';

class QuestionVideo extends Component {
  constructor() {
    super();
    this.state = {
      video: null
    };
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
        <div className="question-video__content mb-4">
          <button
            className="btn btn-fb btn-primary rounded-0 btn-login-fb"
            onClick={this._handleBrowse.bind(this)}
          >
            BROWSE VIDEO FILE
          </button>
          <input type="file" accept='video/*'/>
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
