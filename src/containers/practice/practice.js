import React, { Component } from 'react';
import PracticeVideoSlide from './practice_videoSlide';
import './practice.style.css';

class Practice extends Component {
  render() {
    return (
      <div>
        <PracticeVideoSlide {...this.props}/>
      </div>
    );
  }
}

export default Practice;
