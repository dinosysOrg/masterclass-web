import React, {Component} from 'react';
import './syllabusDetail.style.css';
import VideoPlayer from '../../components/shared/video_player';
import SyllabusDetailTool from './syllabusDetail_tools';
import * as _ from 'lodash';
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
   * check loading status
   * @return {html} html code 
   */
  checkLoading() {
    let syllabusReducer = this.props.payload.syllabusReducer;
    if (!_.isEmpty(syllabusReducer)) {
      return (
        <div className="syllabusDetail-page">
          <div className="container">
            <div className="pageTitle">
              <h2 className="pageTitle__title">{syllabusReducer.syllabus.title}</h2>
              <p className="pageTitle__sub">{syllabusReducer.path.level.name}  {syllabusReducer.path.instrument.name}</p>
            </div>
            <div className="video-box">
              <VideoPlayer videos={syllabusReducer.syllabus.videos}/>
            </div>
            <div className="tool-box">
              <SyllabusDetailTool />
            </div>
          </div>
        </div>
      );
    }
  }

  /**
   * @return {Component} - the rendered component
   */
  render() {
    return (
      <div>
        {this.checkLoading()}
      </div>
    );
  }
}

export default SyllabusDetail;
