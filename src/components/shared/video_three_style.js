import React, { Component } from 'react';

class VideoThree extends Component {
  constructor() {
    super();
    this.state = {
      speed: 1,
      fullscreen: false,
      currentTime: 0
    }
  }

  handleBackwardClick() {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      if (obj.currentTime >= 10) {
        obj.currentTime -= 10;
      } else {
        obj.currentTime = 0;
      }
    });
  }

  handlePlayClick() {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      obj.play();
    });
  }

  handleForwardClick() {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      if (obj.duration - obj.currentTime >= 10) {
        obj.currentTime += 10;
      } else {
        obj.currentTime = obj.duration;
      }
    });
  }

  handleChangeVolume(value) {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      obj.volume = value/100;
    });
  }

  handleChangeSpeed(speed) {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      obj.playbackRate = speed;
    });
  }

  handlePauseClick() {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      obj.pause();
    });
  }

  render() {
    return (
      <div className="video-player__three">
        <div className="video-player__three__first">
          <video tabIndex={-1} ref="firstVid" onClick={this.props.openAngleSelector} onBlur={this.props.closeAnglePopup}>
            <source src="http://techslides.com/demos/sample-videos/small.webm"></source>
          </video>
        </div>
        <div className="video-player__three__second">
          <video tabIndex={-1}  ref="secondVid" onClick={this.props.openAngleSelector} onBlur={this.props.closeAnglePopup}>
            <source  src="http://techslides.com/demos/sample-videos/small.webm"></source>
          </video>
        </div>
        <div className="video-player__three__third">
          <video tabIndex={-1}  ref="thirdVid" onEnded={this.props.onVideoEnded} onClick={this.props.openAngleSelector} onBlur={this.props.closeAnglePopup}>
            <source src="http://techslides.com/demos/sample-videos/small.webm"></source>
          </video>
        </div>
      </div>
    );
  }

}

export default VideoThree;