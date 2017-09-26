import React, { Component } from 'react';
import ReactModal from 'react-modal';
import VideoPlayer from '../../components/shared/video_player';

class PracticeVideoModal extends Component {
  constructor() {
    super();
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
        <VideoPlayer {...this.props} videos={this.props.video} layoutControl={false}/>
      </ReactModal>
    );
  }
}

export default PracticeVideoModal;
