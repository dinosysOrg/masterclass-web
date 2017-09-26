import React, { Component } from 'react';
import PracticeVideoModal from './practice_videoModal';
import './practice.style.css';

class Practice extends Component {
  _handleViewVideo() {
    this.props.initAction.showModal('modalPracticeVideo');
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={this._handleViewVideo.bind(this)}
        >Demo</button>
        <PracticeVideoModal {...this.props}/>
      </div>
    );
  }
}

export default Practice;
