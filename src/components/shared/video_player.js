import React, { Component } from "react";
import * as Icon from "react-icons/lib/fa/";
import VideoContent from "./video_content";
import * as IMG from "../../assets/images";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userAction from "../../redux/user/user.action";
import storageConfig from "../../configs/storage.config";
import PropTypes from 'prop-types';
import IconMC from './icon';
import $ from 'jquery';
/*
Video Player Component
This component provide controller for the videos and 
provide various screen layout to arrange them
*/

const SPEED_MULTIPLIERS = [2, 1.5, 1, 0.5];
let controlsTimeout;
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
      didInitTimeEvent: false,
      volumeIcon: 'volumn',
    };

    this.layoutImage = [
      IMG.default.layoutVideo1,
      IMG.default.layoutVideo2,
      IMG.default.layoutVideo3,
      IMG.default.layoutVideo4,
      IMG.default.layoutVideo5
    ];

    this.loadingGif = IMG.default.loadingGif;

    this._closePopUp = this._closePopUp.bind(this);
    this._fullscreenHandler = this._fullscreenHandler.bind(this);
    this._updateTime = this._updateTime.bind(this);
    this._showControls = this._showControls.bind(this);
    this._hideControls = this._hideControls.bind(this);
    this._seekMouseUp = this._seekMouseUp.bind(this);
    this._seekMouseMove = this._seekMouseMove.bind(this);

    this.volumeIcon = 'volumn';
    this.seekDrag = false;
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
    document.addEventListener('mouseup', this._seekMouseUp);
    document.addEventListener('mousemove', this._seekMouseMove);
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
    document.removeEventListener('mouseup', this._seekMouseUp);
    document.removeEventListener('mousemove', this._seekMouseMove);
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
      this.refs.videoContent.handleSeekVideo(this.state.currentTime);
    }
    if (!this.state.fullScreen) {
      let controls = document.getElementsByClassName("video-player__controls")[0];
      if (controls.style.visibility === "hidden") {
        controls.style.visibility = "visible";
      }
      clearTimeout(controlsTimeout);
    }
  }

  handleBackwardClick(e) {
    let videoContent = this.refs.videoContent;
    this.setState({ playing: false });
    videoContent.handleBackwardClick();
  }

  handlePlayClick(e) {
    let videoContent = this.refs.videoContent;
    this.setState({ playing: true });
    videoContent.handlePlayClick();
  }

  handlePauseClick(e) {
    let videoContent = this.refs.videoContent;
    this.setState({ playing: false });
    videoContent.handlePauseClick();
  }

  handleForwardClick(e) {
    let videoContent = this.refs.videoContent;
    this.setState({ playing: false });
    videoContent.handleForwardClick();
  }

  handleChangeVolume(e) {
    let videoContent = this.refs.videoContent,
      value = e.target.value;
    if (value > 66) {
      this.volumeIcon = 'volumn';
    } else if (value > 33) {
      this.volumeIcon = 'volumn2'
    } else if (value > 1) {
      this.volumeIcon = 'volumn3';
    } else {
      this.volumeIcon = 'mute';
    }
    this.setState({ volume: value });
    videoContent.handleChangeVolume(value);
  }

  handleChangeSpeed(e) {
    let videoContent = this.refs.videoContent,
      value = parseFloat(e.target.textContent);
    this.setState({ currentSpeed: value });
    videoContent.handleChangeSpeed(value);
  }

  handleSettingClick(e) {
    this.setState({ settingOpened: !this.state.settingOpened });
  }

  openAngleSelector(e) {
    if (this.props.layoutControl) {
      e.target.classList.add("selected");
      this.setState({ angleOpened: !this.state.angleOpened });
    } else {
      return;
    }
  }

  openVolumeControl(e) {
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
      modal.classList.remove('fullscreen');
      return this.setState({fullScreen: !this.state.fullScreen});
    }
    if (modal && !this.state.fullscreen) {
      modal.classList.add('fullscreen');
      return this.setState({fullScreen: !this.state.fullScreen});
    }
    return this.setState({fullScreen: !this.state.fullScreen});
  }

  selectLayout(id) {
    this.setState({currentLayout: id, settingOpened: false});
    this.handlePauseClick();
    this.props.userAction.putUserLayout({layout_id: id});
  }

  selectVideo(url) {
    let targetSrc = url,
        selectedVideo = document.getElementsByClassName('selected')[0];
    selectedVideo.src = targetSrc;
    this.refs.videoContent.handlePauseClick();
    this.refs.videoContent.handleSeekVideo(this.state.currentTime);
    this.setState({playing: false});
  }

  handleOnVideoEnded() {
    this.setState({ playing: false });
  }

  seekVideo(x) {
    let seekBar = $('.progress'),
        time,
        position = x - seekBar.offset().left,
        width = seekBar.width(),
        progress = position / width;
    if (progress > 1) {
      progress = 1;
    }
    if (progress < 0) {
      progress = 0;
    }
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

  _closeFullScreen() {
    if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
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
      let angleIndex = 'angle' + index;
      let image = <img ref={angleIndex} src={this.loadingGif} className="loading-angle"/>;
      let downloadingImage = new Image();
      downloadingImage.onload = (e) => {
          this.refs[angleIndex].src = e.target.src;
          this.refs[angleIndex].classList.remove("loading-angle");
      };
      downloadingImage.src = "https://media.w3.org/2010/05/sintel/poster.png";
      return (
        <div
          key={index}
          className="video-player__setting__item"
          onClick={this.selectVideo.bind(this, item.url)}
        >
         {image}
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
          ref="volume"
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
          <IconMC name="settings" size={20} color="#fbdd10" />
          <div>Choose Screen Layout</div>
        </li>
      ) : (
        <li className="nav-item" onClick={this.handleSettingClick.bind(this)}>
          <IconMC name="settings" size={20}/>
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

  _showControls() {
    if (this.state.fullScreen) {
      let controls = document.getElementsByClassName("video-player__controls")[0];
      controls.style.visibility = "visible";
      clearTimeout(controlsTimeout);
      controlsTimeout = setTimeout(() => {
        controls.style.visibility = "hidden";
      }, 2000);
    }
  }

  _hideControls() {
    if (this.state.fullScreen) {
      let controls = document.getElementsByClassName("video-player__controls")[0];
      controlsTimeout = setTimeout(() => {
        controls.style.visibility = "hidden";
      }, 2000);
    }  
  }

  _seekMouseDown(e) {
    this.seekDrag = true;
    this.seekVideo(e.pageX);
  }

  _seekMouseUp(e) {
    if (this.seekDrag) {
      this.seekDrag = false;
      this.seekVideo(e.pageX);
    }
  }

  _seekMouseMove(e) {
    if (this.seekDrag) {
      this.seekVideo(e.pageX);
    }
  }

  _renderPlayer() {
    if (this.props.videos.length > 0) {
      let className = this.state.fullScreen
      ? "video-player clearfix fullscreen"
      : "video-player clearfix";
      return (
        <div ref="player" className={className} 
          onMouseOver={this._showControls.bind(this)}
          onMouseLeave={this._hideControls.bind(this)}>
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
              <div className="progress" onMouseDown={this._seekMouseDown.bind(this)}>
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
                    <IconMC name="loopBack10s" size={20}/>
                  </li>
                  {this.state.playing ? (
                    <li
                      className="nav-item"
                      onClick={this.handlePauseClick.bind(this)}
                    >
                      <IconMC name="pause" size={20}/>
                    </li>
                  ) : (
                    <li
                      className="nav-item"
                      onClick={this.handlePlayClick.bind(this)}
                    >
                      <IconMC name="play" size={20}/>
                    </li>
                  )}
                  <li
                    className="nav-item"
                    onClick={this.handleForwardClick.bind(this)}
                  >
                    <IconMC name="loopForward10s" size={20}/>
                  </li>
                  <li
                    className="nav-item volume"
                    onClick={this.openVolumeControl.bind(this)}
                  >
                    <IconMC name={this.volumeIcon} size={20}/>
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
                      onClick={this._closeFullScreen.bind(this)}
                    >
                      <Icon.FaCompress size={20} color="#fff" />
                    </li>
                  ) : (
                    <li
                      className="nav-item fullscreen"
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
