import React, { Component } from 'react';

class VideoThree extends Component {
  constructor() {
    super();
    this.state = {
      speed: 1,
      fullscreen: false,
      progress: 0
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

  handleChangeVolume() {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      //TODO
    });
  }

  handleChangeSpeed() {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      //TODO
    });
  }
  
  handleFullscreen() {
    let refs = this.refs;
    this.setState({playing: true});
    Object.keys(refs).forEach(function (key) {
      let obj = refs[key];
      //TODO
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

  _onTimeUpdate() {
    let vid = this.refs.thirdVid,
        progress = vid.currentTime/vid.duration*100;
    this.setState({progress: progress});
  }

  render() {
    return (
      <div className="video-player__content">
        <div className="video-player__content__first">
          <video ref="firstVid">
            <source src="http://techslides.com/demos/sample-videos/small.webm"></source>
          </video>
        </div>
        <div className="video-player__content__second">
          <video ref="secondVid">
            <source src="http://techslides.com/demos/sample-videos/small.webm"></source>
          </video>
        </div>
        <div className="video-player__content__third">
          <video ref="thirdVid" onEnded={this.props.onVideoEnded} onTimeUpdate={this._onTimeUpdate.bind(this)}>
            <source src="http://techslides.com/demos/sample-videos/small.webm"></source>
          </video>
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar"
            style={{width: this.state.progress + "%"}}
            aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    );
  }

}

export default VideoThree;