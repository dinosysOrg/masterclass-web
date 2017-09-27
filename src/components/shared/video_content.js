import React, { Component } from "react";

class VideoContent extends Component {
  handleBackwardClick() {
    let refs = this.refs;
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      if (obj.currentTime >= 10) {
        obj.currentTime -= 10;
      } else {
        obj.currentTime = 0;
      }
      obj.pause();
    });
  }

  handlePlayClick() {
    let refs = this.refs;
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      obj.play();
    });
  }

  handleForwardClick() {
    let refs = this.refs;
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      if (obj.duration - obj.currentTime >= 10) {
        obj.currentTime += 10;
      } else {
        obj.currentTime = obj.duration;
      }
      obj.pause();
    });
  }

  handleChangeVolume(value) {
    let refs = this.refs;
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      obj.volume = value / 100;
    });
  }

  handleChangeSpeed(speed) {
    let refs = this.refs;
    Object.keys(refs).forEach(function(key) {
      let obj = refs[key];
      obj.playbackRate = speed;
    });
  }

  handlePauseClick() {
    let refs = this.refs;
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
    let angleControlClass = this.props.angleControl ? ' angle-active': '';
    switch (this.props.layoutID) {
      case 0: {
        return (
          <div className="video-player__one">
            <div className={'video-player__one__first' + angleControlClass}>
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
            <div className={'video-player__two__first' + angleControlClass}>
              <video
                tabIndex={-1}
                ref="firstVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[0].url} />
              </video>
            </div>
            <div className={'video-player__two__second' + angleControlClass}>
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
            <div className={'video-player__three__first' + angleControlClass}>
              <video
                tabIndex={-1}
                ref="firstVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[0].url} />
              </video>
            </div>
            <div className={'video-player__three__second' + angleControlClass}>
              <video
                tabIndex={-1}
                ref="secondVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[1].url} />
              </video>
            </div>
            <div className={'video-player__three__third' + angleControlClass}>
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
              <div className={'video-player__four__first' + angleControlClass}>
                <video
                  tabIndex={-1}
                  ref="firstVid"
                  onClick={this.props.openAngleSelector}
                >
                  <source src={this.props.videos[0].url} />
                </video>
              </div>
              <div className="video-player__four__left-block">
                <div className={'video-player__four__second' + angleControlClass}>
                  <video
                    tabIndex={-1}
                    ref="secondVid"
                    onClick={this.props.openAngleSelector}
                  >
                    <source src={this.props.videos[1].url} />
                  </video>
                </div>
                <div className={'video-player__four__third' + angleControlClass}>
                  <video
                    tabIndex={-1}
                    ref="thirdVid"
                    onClick={this.props.openAngleSelector}
                  >
                    <source src={this.props.videos[2].url} />
                  </video>
                </div>
                <div className={'video-player__four__fourth' + angleControlClass}>
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
            <div className={'video-player__five__first' + angleControlClass}>
              <video
                tabIndex={-1}
                ref="firstVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[0].url} />
              </video>
            </div>
            <div className={'video-player__five__second' + angleControlClass}>
              <video
                tabIndex={-1}
                ref="secondVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[1].url} />
              </video>
            </div>
            <div className={'video-player__five__third' + angleControlClass}>
              <video
                tabIndex={-1}
                ref="thirdVid"
                onClick={this.props.openAngleSelector}
              >
                <source src={this.props.videos[2].url} />
              </video>
            </div>
            <div className={'video-player__five__fourth' + angleControlClass}>
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
