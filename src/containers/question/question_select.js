import React, { Component } from 'react';
import Icon from '../../components/shared/icon';
import {Link} from 'react-router';
class QuestionSelect extends Component {
  _handleSubmit() {
    //TODO
  }

  _handleCancel() {
    //TODO
  }

  render() {
    const {path_Id} = this.props.params;
    return (
      <div className="question-select">
        <div className="question-select__content row">
          <Link to={`/Path/${path_Id}/QA/record`} className="col text-center">
            <div className="record-wrapper">
              <Icon name="webcamRecord" size={60}/>
            </div>
            <div className="mt-4">Record a video using webcam</div>
          </Link>
          <Link to={`/Path/${path_Id}/QA/upload`} className="col text-center">
            <div className="video-wrapper">
              <Icon name="videoUpload" size={60}/>
            </div>
            <div className="mt-4">Upload video question</div>
          </Link>
          <Link to={`/Path/${path_Id}/QA/write`} className="col text-center">
            <div className="text-wrapper">
              <Icon name="uploadLesson" size={60}/>
            </div>
            <div className="mt-4">Write a question</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default QuestionSelect;