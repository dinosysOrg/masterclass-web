import React, {Component} from 'react';
import './syllabusDetail.style.css';
import VideoPlayer from '../../components/shared/video_player';
import SyllabusDetailTool from './syllabusDetail_tools';
import {Link} from 'react-router';
import * as _ from 'lodash';
/**
 * SyllabusPage
 */
class SyllabusDetail extends Component {
  /**
   * check loading status
   * @return {html} html code 
   */
  checkLoading() {
    let syllabusReducer = this.props.payload.syllabusReducer;
    let {path_Id} = this.props.params;
    if (!_.isEmpty(syllabusReducer)) {
      return (
        <div className="syllabusDetail-page">
          <div className="container">
            <div className="pageTitle">
              <h2 className="pageTitle__title">{syllabusReducer.syllabus.title}</h2>
              <p className="pageTitle__sub">{syllabusReducer.path.level.name}  {syllabusReducer.path.instrument.name}</p>
            </div>
            <div className="video-box">
              <div className="row mt-5 mb-2">
                <div className="col"><Link className="video-box__backLink" to={`/Path/${path_Id}/Syllabus`}>Back to path syllabus</Link></div>
                <div className="col text-right">
                  <ul className="list-inline video-box__list">
                    <li className="list-inline-item"><Link to={`/Path/${path_Id}/Syllabus`}>Previous lesson</Link></li>
                    <li className="list-inline-item"><Link to={`/Path/${path_Id}/Syllabus`}>Next lesson</Link></li>
                  </ul>
                </div>
              </div>
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
