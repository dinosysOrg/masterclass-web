import React, {Component} from 'react';
import './syllabusDetail.style.css';
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
            {/* video is here */}
          </div>
        </div>
      </div>
    );
  }
}

export default SyllabusDetail;
