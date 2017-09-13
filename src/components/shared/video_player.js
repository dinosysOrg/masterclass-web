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
          angleOpened: false,
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

        this.angleImage = [
          'http://cdo.seymourduncan.com/blog/wp-content/uploads/The-Bonamassa-pickups-in-action.jpg',
          'https://i1.wp.com/www.songwritingmagazine.co.uk/wp-content/uploads/guitar-tips-MAIN.jpg?resize=650%2C366',
          'http://www.guitaradventures.com/wp-content/uploads/2014/01/9.jpg',
          'http://wwwcmuseorg-lvzm5mr0z.stackpathdns.com/wp-content/uploads/2017/03/guitar_hurdles.jpg',
          'https://cdn.shutterstock.com/shutterstock/videos/1135024/thumb/1.jpg',
          'http://www.ipextv.tv/wp-content/uploads/2017/07/carousel-image1.jpg'

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
      if(this.state.settingOpened || this.state.angleOpened) {
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

    openAngleSelector(e) {
      e.preventDefault();
      e.target.parentElement.classList.add('video-active');
      this.setState({angleOpened: !this.state.angleOpened});
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
      if(this.state.settingOpened) {
        this.setState({settingOpened: false});
      }
    }

    _closeAnglePopup() {
      let videoWrapper = document.getElementsByClassName('video-active')[0];
      if (videoWrapper) {
        videoWrapper.classList.remove('video-active');
      }
      if (this.state.angleOpened) {
        this.setState({angleOpened: false});
      }
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

    _renderImage() {
      return this.layoutImage.map((value,index) => {
        return (
          <div key={index} className="video-player__setting__item" onClick={this.selectLayout.bind(this)}>
            <img src={value} alt="Layout"/>
          </div>
        )
      });
    }

    _renderAngle() {
      return this.angleImage.map((value, index) => {
        return (
          <div key={index} className="video-player__setting__item" onClick={this.selectVideo.bind(this)}>
            <img src={value} alt="Angle"/>
          </div>
        );
      });
    }

    _renderSetting() {
      if (this.state.settingOpened) {
        return (
          <div tabIndex={-1} ref='settingPopup' className="video-player__setting" 
            onBlur={this._closeSettingPopup.bind(this)}>
            {this._renderImage()}
          </div>
        );
      }
      if (this.state.angleOpened) {
        return (
          <div tabIndex={-1} ref='settingPopup' className="video-player__setting" 
            onBlur={this._closeAnglePopup.bind(this)}>
            {this._renderAngle()}
          </div>
        );
      }
      return null;
    }

    _renderVolume() {
      return (
        this.state.volumeOpened ? 
        <li className="video-player__volume">
          <input className="video-player__volume__slider"
            type="range" min="0" max="100" 
            onChange={this.handleChangeVolume.bind(this)} 
            defaultValue={this.state.volume}/>
        </li> : null
      )
    }

    _renderSettingIcon() {
      return (
        this.state.settingOpened ? 
        <li className="nav-item setting-opened" 
          onClick={this.handleSettingClick.bind(this)}>
          <Icon.FaCog size={20} fill="#fbdd10" />
          <div>Choose Screen Layout</div>
        </li> : 
        <li className="nav-item" onClick={this.handleSettingClick.bind(this)}>
          <Icon.FaCog size={20} fill="#fff" />
        </li>
      )
    }

    _renderTime() {
      let date = new Date(null);
      date.setSeconds(this.state.currentTime);
      return date.toISOString().substr(11,8);
    }

    render() {
      let className = this.state.fullScreen ? 'video-player fullscreen' : 'video-player';
          
      return (
        <div className={className}>
          <div className="content-wrapper">
            <VideoThree ref="videoContent" 
              onVideoEnded={this.handleOnVideoEnded.bind(this)}
              openAngleSelector={this.openAngleSelector.bind(this)} />
            {this._renderSetting()}
            <div className="video-player__controls clearfix">
              <div className="progress">
                <div className="progress-bar" role="progressbar"
                  style={{width: this.state.progress + "%"}}
                  aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
              <div className="float-left">
                <ul className="video-player__controls__left">
                  <li className="nav-item" onClick={this.handleBackwardClick.bind(this)}>
                    <Icon.FaBackward size={20} fill="#fff" />
                  </li>
                    {
                      this.state.playing ?
                      <li className="nav-item" onClick={this.handlePauseClick.bind(this)}>
                        <Icon.FaPause size={20} fill="#fff"/>
                      </li> :
                      <li className="nav-item" onClick={this.handlePlayClick.bind(this)}>
                        <Icon.FaPlay size={20} fill="#fff"/>
                      </li>
                    }
                  <li className="nav-item" onClick={this.handleForwardClick.bind(this)}>
                    <Icon.FaForward size={20} fill="#fff" />
                  </li>
                  <li className="nav-item" onClick={this.openVolumeControl.bind(this)}>
                    <Icon.FaVolumeUp size={20} fill="#fff" />
                  </li>
                  {this._renderVolume()}
                  <li className="nav-item">
                    <span className="video-player__timestamp">{this._renderTime()}</span>
                  </li>
                </ul>
              </div>
              <div className="float-right">
                <ul className="video-player__controls__right">              
                  {this._renderSettingIcon()}
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