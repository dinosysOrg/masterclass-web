import React, {Component} from 'react';
import './syllabusDetail.style.css';
import VideoPlayer from '../../components/shared/video_player';
/**
 * SyllabusPage
 */
class SyllabusDetail extends Component {
  /**
   * 
   */
  componentDidMount() {
  }

  /**
   * @return {Component} - the rendered component
   */
  render() {
    return (
      <div className="syllabusDetail-page">
        <div className="container">
          <div className="pageTitle">
            <h2 className="pageTitle__title">SYLLABUS DETAIL</h2>
            <p className="pageTitle__sub">LEVEL + INSTRUMENT</p>
          </div>
          <div className="video-box">
            <VideoPlayer/>
          </div>
        </div>
      </div>
    );
  }
}

export default SyllabusDetail;
