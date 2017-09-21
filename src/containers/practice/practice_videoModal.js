import React, { Component } from 'react';
import ReactModal from 'react-modal';
import VideoPlayer from '../../components/shared/video_player';

class PracticeVideoModal extends Component {
  constructor() {
    super();
    
    this.placeholderData = [
        {
          "id": 11,
          "uploader_id": 9,
          "name": "Syllabus video_2",
          "video_type": "syllabus",
          "url": "http://techslides.com/demos/sample-videos/small.webm",
          "created_at": "2017-09-13T07:12:01.968Z",
          "updated_at": "2017-09-13T07:12:01.968Z",
          "time": 213
      }
    ]
  }
  _checkModal() {
    const {modalName} = this.props.payload.initReducer;
    if (modalName === 'modalPracticeVideo') {
      return true;
    } else {
      return false;
    }
  }

  _onHideModal() {
    this.props.initAction.hideModal();
  }

  render() {
    return (
      <ReactModal
        isOpen={this._checkModal()}
        onCloseModal={()=> this._onHideModal()}
        onRequestClose={()=> this._onHideModal()}
        contentLabel="Practice Modal"
        portalClassName="practice-video-modal"
      >
        <VideoPlayer {...this.props} videos={this.placeholderData} layoutControl={false}/>
      </ReactModal>
    );
  }
}

export default PracticeVideoModal;
