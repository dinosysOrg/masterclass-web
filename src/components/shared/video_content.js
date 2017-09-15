import React, { Component } from "react";

class VideoContent extends Component {
  constructor() {
    super();
    this.state = {
      speed: 1,
      fullscreen: false,
      currentTime: 0
    };
  }

  handleBackwardClick() {
    let refs = this.refs;
    this.setState({ playing: true });
    Object.keys(refs).forEach(function(key) {
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
    this.setState({ playing: true });
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      obj.play();
    });
  }

  handleForwardClick() {
    let refs = this.refs;
    this.setState({ playing: true });
    Object.keys(refs).forEach(function(key) {
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
    this.setState({ playing: true });
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      obj.volume = value / 100;
    });
  }

  handleChangeSpeed(speed) {
    let refs = this.refs;
    this.setState({ playing: true });
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      obj.playbackRate = speed;
    });
  }

  handlePauseClick() {
    let refs = this.refs;
    this.setState({ playing: true });
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      obj.pause();
    });
  }

  handleSeekVideo(time) {
    let refs = this.refs;
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      obj.currentTime = time;
    });
  }

  getDuration() {
    return this.refs.firstVid.duration;
  }

  _renderContent() {
    switch (this.props.layoutID) {
      case 0: {
        return (
          <div className="video-player__one">
            <div className="video-player__one__first">
              <video
                tabIndex={-1}
                ref="firstVid"
                onEnded={this.props.onVideoEnded}
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[0].url} />
              </video>
            </div>
          </div>
        );
      }
      case 1: {
        return (
          <div className="video-player__two">
            <div className="video-player__two__first">
              <video
                tabIndex={-1}
                ref="firstVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[0].url} />
              </video>
            </div>
            <div className="video-player__two__second">
              <video
                tabIndex={-1}
                ref="secondVid"
                onEnded={this.props.onVideoEnded}
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[1].url} />
              </video>
            </div>
          </div>
        );
      }
      case 2: {
        return (
          <div className="video-player__three">
            <div className="video-player__three__first">
              <video
                tabIndex={-1}
                ref="firstVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[0].url} />
              </video>
            </div>
            <div className="video-player__three__second">
              <video
                tabIndex={-1}
                ref="secondVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[1].url} />
              </video>
            </div>
            <div className="video-player__three__third">
              <video
                tabIndex={-1}
                ref="thirdVid"
                onEnded={this.props.onVideoEnded}
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[2].url} />
              </video>
            </div>
          </div>
        );
      }
      case 3: {
        return (
          <div className="video-player__four">
            <div className="video-player__four__center">
              <div className="video-player__four__first">
                <video
                  tabIndex={-1}
                  ref="firstVid"
                  onClick={this.props.openAngleSelector}
                >
                  <source src={this.props.videos[0].url} />
                </video>
              </div>
              <div className="video-player__four__left-block">
                <div className="video-player__four__second">
                  <video
                    tabIndex={-1}
                    ref="secondVid"
                    onClick={this.props.openAngleSelector}
                  >
                    <source src={this.props.videos[1].url} />
                  </video>
                </div>
                <div className="video-player__four__third">
                  <video
                    tabIndex={-1}
                    ref="thirdVid"
                    onClick={this.props.openAngleSelector}
                  >
                    <source src={this.props.videos[2].url} />
                  </video>
                </div>
                <div className="video-player__four__fourth">
                  <video
                    tabIndex={-1}
                    ref="fourthVid"
                    onEnded={this.props.onVideoEnded}
                    onClick={this.props.openAngleSelector}
                  >
                    <source src={this.props.videos[3].url} />
                  </video>
                </div>
              </div>
            </div>
          </div>
        );
      }
      case 4: {
        return (
          <div className="video-player__five">
            <div className="video-player__five__first">
              <video
                tabIndex={-1}
                ref="firstVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[0].url} />
              </video>
            </div>
            <div className="video-player__five__second">
              <video
                tabIndex={-1}
                ref="secondVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[1].url} />
              </video>
            </div>
            <div className="video-player__five__third">
              <video
                tabIndex={-1}
                ref="thirdVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[2].url} />
              </video>
            </div>
            <div className="video-player__five__fourth">
              <video
                tabIndex={-1}
                ref="fourthVid"
                onEnded={this.props.onVideoEnded}
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[3].url} />
              </video>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  }

  render() {
    return this._renderContent();
  }
}

export default VideoContent;
