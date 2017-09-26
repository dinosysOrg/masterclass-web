import React, { Component } from "react";
import * as Icon from "react-icons/lib/fa/";
import VideoContent from "./video_content";
import * as IMG from "../../assets/images";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/user/user.action";
import storageConfig from "../../configs/storage.config";
import PropTypes from 'prop-types';

/*
Video Player Component
This component provide controller for the videos and 
provide various screen layout to arrange them
*/

const SPEED_MULTIPLIERS = [2, 1.5, 1, 0.5];

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      settingOpened: false,
      volumeOpened: false,
      angleOpened: false,
      fullScreen: false,
      progress: 0,
      currentTime: 0,
      currentSpeed: 1,
      volume: 100,
      currentLayout: 0,
      didInitTimeEvent: false
    };

    this.layoutImage = [
      IMG.default.layoutVideo1,
      IMG.default.layoutVideo2,
      IMG.default.layoutVideo3,
      IMG.default.layoutVideo4,
      IMG.default.layoutVideo5
    ];

    this._closePopUp = this._closePopUp.bind(this);
    this._fullscreenHandler = this._fullscreenHandler.bind(this);
    this._updateTime = this._updateTime.bind(this);
  }
  componentWillMount() {
    const route = this.props.route;
    if (route) {
      if (route.path === '/Path/:path_Id/Practice') {
        this.setState({currentLayout: 0});
      }
    } else {
      this.setState({currentLayout: storageConfig.getUserLocal().layout_id});
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this._closePopUp);
    document.addEventListener('webkitfullscreenchange', this._fullscreenHandler, false);
    document.addEventListener('mozfullscreenchange', this._fullscreenHandler, false);
    document.addEventListener('fullscreenchange', this._fullscreenHandler, false);
    document.addEventListener('MSFullscreenChange', this._fullscreenHandler, false);
  }

  componentWillUnmount() {
    let video = document.getElementsByTagName("video")[0];
    if (video) {
      video.removeEventListener("timeupdate", this._updateTime);
    }
    document.removeEventListener("keydown", this._closePopUp);
    document.removeEventListener('webkitfullscreenchange', this._fullscreenHandler, false);
    document.removeEventListener('mozfullscreenchange', this._fullscreenHandler, false);
    document.removeEventListener('fullscreenchange', this._fullscreenHandler, false);
    document.removeEventListener('MSFullscreenChange', this._fullscreenHandler, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.settingOpened || this.state.angleOpened) {
      this.refs.settingPopup.focus();
    }
    if (!this.state.didInitTimeEvent) {
      this.setState({didInitTimeEvent: true});
      let video = document.getElementsByTagName("video")[0];
      if (video) {
        video.addEventListener("timeupdate", this._updateTime);
      }
    }
    if (prevState.currentLayout !== this.state.currentLayout) {
      let video = document.getElementsByTagName("video")[0];
      if (video) {
        video.addEventListener("timeupdate", this._updateTime);
      }
    }
  }

  handleBackwardClick(e) {
    e.preventDefault();
    let videoContent = this.refs.videoContent;
    videoContent.handleBackwardClick();
  }

  handlePlayClick(e) {
    e.preventDefault();
    let videoContent = this.refs.videoContent;
    this.setState({ playing: true });
    videoContent.handlePlayClick();
  }

  handlePauseClick(e) {
    e.preventDefault();
    let videoContent = this.refs.videoContent;
    this.setState({ playing: false });
    videoContent.handlePauseClick();
  }

  handleForwardClick(e) {
    e.preventDefault();
    let videoContent = this.refs.videoContent;
    videoContent.handleForwardClick();
  }

  handleChangeVolume(e) {
    e.preventDefault();
    let videoContent = this.refs.videoContent,
      value = e.target.value;
    this.setState({ volume: value });
    videoContent.handleChangeVolume(value);
  }

  handleChangeSpeed(e) {
    e.preventDefault();
    let videoContent = this.refs.videoContent,
      value = parseFloat(e.target.textContent);
    this.setState({ currentSpeed: value });
    videoContent.handleChangeSpeed(value);
  }

  handleSettingClick(e) {
    e.preventDefault();
    this.setState({ settingOpened: !this.state.settingOpened });
  }

  openAngleSelector(e) {
    e.preventDefault();
    if (this.props.layoutControl) {
      e.target.classList.add("selected");
      this.setState({ angleOpened: !this.state.angleOpened });
    } else {
      return;
    }
  }

  openVolumeControl(e) {
    e.preventDefault();
    this.setState({ volumeOpened: !this.state.volumeOpened });
  }

  handleFullscreen() {
    if (!this.state.fullScreen) {
      let el = document.documentElement,
          rfs = el.requestFullscreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
            || el.msRequestFullscreen 
        ;

        rfs.call(el);
    }
  }
  
  _fullscreenHandler() {
    let modal = document.getElementsByClassName('ReactModal__Overlay--after-open')[0];
    if (modal && this.state.fullScreen) {
      console.log('a');
      modal.classList.remove('fullscreen');
      this.setState({fullScreen: !this.state.fullScreen});
      return;
    }
    if (modal && !this.state.fullscreen) {
      console.log('b');
      modal.classList.add('fullscreen');
      this.setState({fullScreen: !this.state.fullScreen});
      return;
    }
  }

  selectLayout(id) {
    this.setState({currentLayout: id, settingOpened: false});
    this.props.userAction.putUserLayout({layout_id: id});
  }

  selectVideo(e) {
    let targetSrc = e.target.currentSrc,
        newSrc = targetSrc.substr(0, targetSrc.length - 4),
        selectedVideo = document.getElementsByClassName('selected')[0];
    selectedVideo.src = newSrc;
  }

  handleOnVideoEnded() {
    this.setState({ playing: false });
  }

  seekVideo(e) {
    let offset = e.target.getBoundingClientRect().left,
        left = e.clientX - offset,
        width = document.getElementsByClassName('progress')[0].clientWidth,
        progress = left / width,
        time = progress * this.refs.videoContent.getDuration();
    this.refs.videoContent.handleSeekVideo(time);
    this.setState({progress: progress * 100});
  }

  _closePopUp(e) {
    if (e.keyCode === 27) {
      this.setState({
        settingOpened: false,
        volumeOpened: false,
        fullScreen: false,
        angleOpened: false,
      });
    }
  }

  _closeSettingPopup() {
    if (this.state.settingOpened) {
      this.setState({ settingOpened: false });
    }
  }

  _closeAnglePopup() {
    let video = document.getElementsByClassName("selected")[0];
    if (video) {
      video.classList.remove("selected");
    }
    if (this.state.angleOpened) {
      this.setState({ angleOpened: false });
    }
  }

  _updateTime() {
    let video = document.getElementsByTagName("video")[0],
      currentTime = video.currentTime,
      progress = currentTime / video.duration * 100;
    this.setState({ currentTime: currentTime, progress: progress });
  }

  _generateSpeedMultipliers() {
    return SPEED_MULTIPLIERS.map((value, index) => {
      if (this.state.currentSpeed === value) {
        return (
          <li key={index} className="speed-item checked">
            <div>{value}</div>
          </li>
        );
      } else {
        return (
          <li key={index} className="speed-item">
            <div onClick={this.handleChangeSpeed.bind(this)}>{value}</div>
          </li>
        );
      }
    });
  }

  _renderImage() {
    let videos = this.props.videos,
        videosAmount = videos.length >= 4 ? 5 : videos.length,
        images = [];
    for (let i = 0; i < videosAmount; i++) {
      images.push(
        <div
          key={i}
          className="video-player__setting__item"
          onClick={this.selectLayout.bind(this, i)}
        >
          <img src={this.layoutImage[i]} alt="Layout" />
        </div>
      );
    }
    return images;
  }

  _renderAngle() {
    return this.props.videos.map((item, index) => {
      return (
        <div
          key={index}
          className="video-player__setting__item"
          onClick={this.selectVideo.bind(this)}
          preload="metadata"
        >
          <video>
            <source src={item.url+'#t=0'}/>
          </video>
        </div>
      );
    });
  }

  _renderSetting() {
    if (this.state.settingOpened) {
      return (
        <div
          tabIndex={-1}
          ref="settingPopup"
          className="video-player__setting"
          onBlur={this._closeSettingPopup.bind(this)}
        >
          {this._renderImage()}
        </div>
      );
    }
    if (this.state.angleOpened) {
      return (
        <div
          tabIndex={-1}
          ref="settingPopup"
          className="video-player__setting"
          onBlur={this._closeAnglePopup.bind(this)}
        >
          {this._renderAngle()}
        </div>
      );
    }
    return null;
  }

  _renderVolume() {
    return this.state.volumeOpened ? (
      <li className="video-player__volume">
        <input
          className="video-player__volume__slider"
          type="range"
          min="0"
          max="100"
          onChange={this.handleChangeVolume.bind(this)}
          defaultValue={this.state.volume}
        />
      </li>
    ) : null;
  }

  _renderSettingIcon() {
    if (this.props.layoutControl)
    {
      return this.state.settingOpened ? (
        <li
          className="nav-item setting-opened"
          onClick={this.handleSettingClick.bind(this)}
        >
          <Icon.FaCog size={20} fill="#fbdd10" />
          <div>Choose Screen Layout</div>
        </li>
      ) : (
        <li className="nav-item setting" onClick={this.handleSettingClick.bind(this)}>
          <Icon.FaCog size={20} fill="#fff" />
        </li>
      );
    } else {
      return null;
    }
  }

  _renderTime() {
    let date = new Date(null);
    date.setSeconds(this.state.currentTime);
    return date.toISOString().substr(11, 8);
  }

  _renderPlayer() {
    if (this.props.videos.length > 0) {
      let className = this.state.fullScreen
      ? "video-player clearfix fullscreen"
      : "video-player clearfix";
      return (
        <div className={className}>
          <div className="content-wrapper">
            <VideoContent
              ref="videoContent"
              layoutID={this.state.currentLayout}
              onVideoEnded={this.handleOnVideoEnded.bind(this)}
              openAngleSelector={this.openAngleSelector.bind(this)}
              videos={this.props.videos}
              angleControl={this.props.layoutControl}
            />
            {this._renderSetting()}
            <div className="video-player__controls clearfix">
              <div className="progress" onClick={this.seekVideo.bind(this)}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: this.state.progress + "%" }}
                  aria-valuenow={this.state.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <div className="float-left">
                <ul className="video-player__controls__left">
                  <li
                    className="nav-item"
                    onClick={this.handleBackwardClick.bind(this)}
                  >
                    <Icon.FaBackward size={20} fill="#fff" />
                  </li>
                  {this.state.playing ? (
                    <li
                      className="nav-item"
                      onClick={this.handlePauseClick.bind(this)}
                    >
                      <Icon.FaPause size={20} fill="#fff" />
                    </li>
                  ) : (
                    <li
                      className="nav-item"
                      onClick={this.handlePlayClick.bind(this)}
                    >
                      <Icon.FaPlay size={20} fill="#fff" />
                    </li>
                  )}
                  <li
                    className="nav-item"
                    onClick={this.handleForwardClick.bind(this)}
                  >
                    <Icon.FaForward size={20} fill="#fff" />
                  </li>
                  <li
                    className="nav-item"
                    onClick={this.openVolumeControl.bind(this)}
                  >
                    <Icon.FaVolumeUp size={20} fill="#fff" />
                  </li>
                  {this._renderVolume()}
                  <li className="nav-item">
                    <span className="video-player__timestamp">
                      {this._renderTime()}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="float-right">
                <ul className="video-player__controls__right">
                  {this._renderSettingIcon()}
                  <li className="nav-item dropup">
                    <a
                      href=""
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {this.state.currentSpeed + "x"}
                    </a>
                    <ul className="dropdown-menu">
                      {this._generateSpeedMultipliers()}
                    </ul>
                  </li>
                  {this.state.fullScreen ? (
                    <li
                      className="nav-item"
                      onClick={this.handleFullscreen.bind(this)}
                    >
                      <Icon.FaCompress size={20} color="#fff" />
                    </li>
                  ) : (
                    <li
                      className="nav-item"
                      onClick={this.handleFullscreen.bind(this)}
                    >
                      <Icon.FaArrowsAlt size={20} color="#fff" />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {this.context.t('lesson no video')}
        </div>
      )
    }
  }

  render() {
    return (
      this._renderPlayer()
    );
  }
}

const mapStateToProps = rootState => {
  return {
    payload: rootState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userAction: bindActionCreators(userAction, dispatch)
  };
};

VideoPlayer.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
