import React, { Component } from 'react';
import RecordRTC from 'recordrtc';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);

class QuestionRecord extends Component {
  constructor() {
    super();
    this.state = {
      video: null,
      descriptionText: '',
      recording: false,
      pause: false,
      recordVideo: null,
      src: null,
      uploadSuccess: null,
      uploading: false
    };
  }

  componentDidMount() {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
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

  requestUserMedia() {
    captureUserMedia((stream) => {
      this.setState({ src: window.URL.createObjectURL(stream) });
    });
  }

  _handleStartRecord() {
    this.setState({recording: true});
    captureUserMedia((stream) => {
      this.setState({recordVideo: RecordRTC(stream, { type: 'video' })});
      this.state.recordVideo.startRecording();
    });
  }

  _stopRecord() {
    this.state.recordVideo.stopRecording(()=>{
      let video = this.state.recordVideo.getBlob();
      this.setState({recording: false, video: video});
    });
  }

  _handlePause() {
    this.setState({pause: !this.state.pause});
    if (!this.state.pause) {
      this.state.recordVideo.pauseRecording();
    } else {
      this.state.recordVideo.resumeRecording();
    }
  }

  _renderPauseButton() {
    if (!this.state.pause) {
      return (
        <button className="btn btn-second btn-pause mb-2"
          onClick={this._handlePause.bind(this)}>
          PAUSE
        </button>
      );
    } else {
      return (
        <button className="btn btn-second btn-pause mb-2"
          onClick={this._handlePause.bind(this)}>
          CONTINUE
        </button>
      );
    }
  }

  _renderRecordingState() {
    if (this.state.recording) {
      let recordingText = this.state.pause ? 'Pause' : 'Recording';
      return (
        <div>
          <div className="question-webcam">
            <video ref="webcam" autoPlay muted>
              <source src={this.state.src}/>
            </video>
          </div>
          <div className="question-recording">
            <span className="question-recording__circle mr-1"></span>
            <span className="question-recording__text">{recordingText}</span>
          </div>
          <div className="question-recording-btn text-right">
            {this._renderPauseButton()}
            <button className="btn btn-save-record" onClick={this._stopRecord.bind(this)}>
              STOP & SAVE
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <button className="btn btn-primary rounded-0 btn-login-fb btn-start-record"
          onClick={this._handleStartRecord.bind(this)}>
          START RECORDING VIDEO
        </button>
      );
    }
  }

  render() {
    let disabled = this.state.video ? false : true;
    return (
      <div className="question-record">
        <div className="question__title font-weight-bold">
          Submit your question
        </div>
        <div className="question__description">
          <input className="description-input" type="text" 
            value={this.state.searchText} 
            placeholder="Type a short description for your question"
            onChange={this._handleDescriptionChange.bind(this)}/>
        </div>
        <div className="question-record__content mb-4">
          {this._renderRecordingState()}
        </div>
        <div className="question-record__button">
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

function captureUserMedia(callback) {
  let params = { audio: true, video: true };

  navigator.getUserMedia(params, callback, (error) => {
    alert(JSON.stringify(error));
  });
};

export default QuestionRecord;
