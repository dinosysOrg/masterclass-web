import React, {Component} from 'react';
import * as Icon from 'react-icons/lib/fa/';
import VideoThree from './video_three_style';

/*
Video Player Component
This component provide controller for the videos and 
provide various screen layout to arrange them
*/

class VideoPlayer extends Component {
    constructor() {
        super();
        this.state = {
          playing: false,
          settingOpened: false
        }

        this.placeHolderImage = [
          'http://via.placeholder.com/215x105',
          'http://via.placeholder.com/215x105',
          'http://via.placeholder.com/215x105',
          'http://via.placeholder.com/215x105',
          'http://via.placeholder.com/215x105',
          'http://via.placeholder.com/215x105',
          'http://via.placeholder.com/215x105',
          'http://via.placeholder.com/215x105'
        ]
    }


    handleBackwardClick() {
      let videoContent = this.refs.videoContent;
      videoContent.handleBackwardClick();
    }

    handlePlayClick() {
      let videoContent = this.refs.videoContent;
      this.setState({playing: true});
      videoContent.handlePlayClick();
    }

    handlePauseClick() {
      let videoContent = this.refs.videoContent;
      this.setState({playing:false});
      videoContent.handlePauseClick();
    }

    handleForwardClick() {
      let videoContent = this.refs.videoContent;
      videoContent.handleForwardClick();
    }

    handleChangeVolume() {
      let videoContent = this.refs.videoContent;
      videoContent.handleChangeVolume();
    }

    handleSettingClick() {
      this.setState({settingOpened: !this.state.settingOpened});
    }

    handleChangeSpeed() {
      //TODO
    }
    
    handleFullscreen() {
      //TODO
    }

    selectLayout() {
      //TODO
    }

    handleOnVideoEnded() {
      this.setState({playing: false});
    }

    render() {
      let image = this.placeHolderImage.map((value,index) =>{
        return <div className="video-player__setting__item" onClick={this.selectLayout.bind(this)}>
          <img src={value} alt="Layout"/>
        </div>
      }),
          setting = this.state.settingOpened ? 
            <div className="video-player__setting">
              <div className="video-player__setting_blur"/>
              {image}
            </div> : null;
      return (
        <div className="video-player">
          <VideoThree ref="videoContent" onVideoEnded={this.handleOnVideoEnded.bind(this)}/>
          {setting}
          <div className="video-player__controls">
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
                <li className="nav-item" onClick={this.handleChangeVolume.bind(this)}>
                  <Icon.FaVolumeUp size={20} color="#fff" />
                </li>
                <li className="nav-item">
                  <span className="video-player__timestamp">06:12</span>
                </li>
              </ul>
            </div>
            <div className="float-right">
              <ul className="video-player__controls__right">
                  <li className="nav-item" onClick={this.handleSettingClick.bind(this)}>
                    <Icon.FaCog size={20} color="#fff" />
                  </li>
                  <li className="nav-item" onClick={this.handleChangeSpeed.bind(this)}>
                    <span className="video-player__controls__speed">1x</span>
                  </li>
                  <li className="nav-item" onClick={this.handleFullscreen.bind(this)}>
                    <Icon.FaArrowsAlt size={20} color="#fff" />
                  </li>
                </ul>
            </div>
          </div>
        </div>
      );
    }
}

export default VideoPlayer;