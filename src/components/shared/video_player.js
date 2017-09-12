import React, {Component} from 'react';
import * as Icon from 'react-icons/lib/fa/';
import VideoThree from './video_three_style';
import * as IMG from '../../assets/images';

/*
Video Player Component
This component provide controller for the videos and 
provide various screen layout to arrange them
*/

const SPEED_MULTIPLIERS = [2, 1.5, 1, 0.5];

class VideoPlayer extends Component {
    constructor() {
        super();
        this.state = {
          playing: false,
          settingOpened: false,
          volumeOpened: false,
          fullScreen: false,
          progress: 0,
          currentTime: 0,
          currentSpeed: 1,
          volume: 100
        }

        this.layoutImage = [
          IMG.default.layoutVideo1,
          IMG.default.layoutVideo2,
          IMG.default.layoutVideo3,
          IMG.default.layoutVideo4,
          IMG.default.layoutVideo5
        ]
    }

    componentDidMount(){
      let video = document.getElementsByTagName('video')[0];
      video.addEventListener('timeupdate', this._updateTime.bind(this));
      document.addEventListener("keydown", this._closePopUp.bind(this));
    }
    
    
    componentWillUnmount() {
      let video = document.getElementsByTagName('video')[0];
      video.removeEventListener('timeupdate', this._updateTime.bind(this));
      document.removeEventListener("keydown", this._closePopUp.bind(this));
    }

    componentDidUpdate() {
      if(this.state.settingOpened) {
        this.refs.settingPopup.focus();
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
      this.setState({playing: true});
      videoContent.handlePlayClick();
    }

    handlePauseClick(e) {
      e.preventDefault();
      let videoContent = this.refs.videoContent;
      this.setState({playing:false});
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
      this.setState({volume: value});
      videoContent.handleChangeVolume(value);
    }

    handleChangeSpeed(e) {
      e.preventDefault();
      let videoContent = this.refs.videoContent,
          value = parseFloat(e.target.textContent);
      this.setState({currentSpeed: value});
      videoContent.handleChangeSpeed(value);
    }

    handleSettingClick(e) {
      e.preventDefault();
      this.setState({settingOpened: !this.state.settingOpened});
    }

    openVolumeControl(e) {
      e.preventDefault();
      this.setState({volumeOpened: !this.state.volumeOpened});
    }
    
    handleFullscreen() {
      if (!this.state.fullScreen) {
        this.setState({fullScreen: true});
      }
    }

    selectLayout() {
      //TODO
    }

    selectVideo() {
      //TODO
    }

    handleOnVideoEnded() {
      this.setState({playing: false});
    }

    _closePopUp() {
      this.setState({
        settingOpened: false,
        volumeOpened: false,
        fullScreen: false
      })
    }

    _closeSettingPopup() {
      this.setState({settingOpened: false});
    }

    _updateTime() {
      let video = document.getElementsByTagName('video')[0],
          currentTime = video.currentTime,
          progress = currentTime / video.duration * 100;
      this.setState({currentTime: currentTime, progress: progress});
    }

    _generateSpeedMultipliers() {
      return SPEED_MULTIPLIERS.map((value, index) => {
        if (this.state.currentSpeed === value) {
          return (
            <li key={index} className="speed-item checked" >
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

    render() {
      let image = this.layoutImage.map((value,index) =>{
        return <div key={index} className="video-player__setting__item" onClick={this.selectLayout.bind(this)}>
          <img src={value} alt="Layout"/>
        </div>
      }),
          className = this.state.fullScreen ? 'video-player fullscreen' : 'video-player',
          setting = this.state.settingOpened ? 
            <div tabIndex={-1} ref='settingPopup' className="video-player__setting" 
              onBlur={this._closeSettingPopup.bind(this)}>
              {image}
            </div> : null,
          volume  = this.state.volumeOpened ? 
            <li className="video-player__volume">
              <input className="video-player__volume__slider"
                type="range" min="0" max="100" 
                onChange={this.handleChangeVolume.bind(this)} 
                defaultValue={this.state.volume}/>
            </li> : null,
          date = new Date(null),
          settingIcon = this.state.settingOpened ? 
            <li className="nav-item setting-opened" 
              onClick={this.handleSettingClick.bind(this)}>
              <Icon.FaCog size={20} color="#fbdd10" />
              <div>Choose Screen Layout</div>
            </li> : 
            <li className="nav-item" onClick={this.handleSettingClick.bind(this)}>
              <Icon.FaCog size={20} color="#fff" />
            </li>; 
          date.setSeconds(this.state.currentTime);
      let currentTime = date.toISOString().substr(11,8);
      return (
        <div className={className}>
          <div className="content-wrapper">
            <VideoThree ref="videoContent" onVideoEnded={this.handleOnVideoEnded.bind(this)} />
            {setting}
            <div className="video-player__controls clearfix">
              <div className="progress">
                <div className="progress-bar" role="progressbar"
                  style={{width: this.state.progress + "%"}}
                  aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="float-left">
                <ul className="video-player__controls__left">
                  <li className="nav-item" onClick={this.handleBackwardClick.bind(this)}>
                    <Icon.FaBackward size={20} color="#fff" />
                  </li>
                    {
                      this.state.playing ?
                      <li className="nav-item" onClick={this.handlePauseClick.bind(this)}>
                        <Icon.FaPause size={20} color="#fff"/>
                      </li> :
                      <li className="nav-item" onClick={this.handlePlayClick.bind(this)}>
                        <Icon.FaPlay size={20} color="#fff"/>
                      </li>
                    }
                  <li className="nav-item" onClick={this.handleForwardClick.bind(this)}>
                    <Icon.FaForward size={20} color="#fff" />
                  </li>
                  <li className="nav-item" onClick={this.openVolumeControl.bind(this)}>
                    <Icon.FaVolumeUp size={20} color="#fff" />
                  </li>
                  {volume}
                  <li className="nav-item">
                    <span className="video-player__timestamp">{currentTime}</span>
                  </li>
                </ul>
              </div>
              <div className="float-right">
                <ul className="video-player__controls__right">              
                    {settingIcon}
                    <li className="nav-item dropup">
                      <a href="#" className="dropdown-toggle" 
                        data-toggle="dropdown">
                      {this.state.currentSpeed + 'x'}</a>
                        <ul className="dropdown-menu">
                         {this._generateSpeedMultipliers()}
                        </ul>
                    </li>
                    {
                      this.state.fullScreen ?
                      <li className="nav-item" onClick={this._closePopUp.bind(this)}>
                        <Icon.FaCompress size={20} color="#fff" />
                      </li> :
                      <li className="nav-item" onClick={this.handleFullscreen.bind(this)}>
                      <Icon.FaArrowsAlt size={20} color="#fff" />
                    </li>
                    }
                  </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default VideoPlayer;