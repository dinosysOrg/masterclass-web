import React, {Component} from 'react';
import './syllabusDetail.style.css';
import VideoPlayer from '../../components/shared/video_player';
import SyllabusDetailMaterials from './syllabusDetail_materials';
import {Link} from 'react-router';
import * as _ from 'lodash';
/**
 * SyllabusPage
 */
class SyllabusDetail extends Component {
  _changeLesson(id) {
    if (id) {
      let {path_Id} = this.props.params,
      data = {
        path_Id: path_Id,
        syllabus_Id: id
      };
      this.refs.player.handlePauseClick();
      this.props.syllabusAction.fetchSyllabus(data);
    }
  }
  /**
   * check loading status
   * @return {html} html code 
   */
  checkLoading() {
    let syllabusReducer = this.props.payload.syllabusReducer;
    let {path_Id} = this.props.params;
    let nextSyllabus = this.props.payload.syllabusReducer.nextSyllabus;
    let prevSyllabus = this.props.payload.syllabusReducer.prevSyllabus;
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
                    <li className="list-inline-item"><Link to={`/Path/${path_Id}/Syllabus/${prevSyllabus}`} onClick={this._changeLesson.bind(this, prevSyllabus)}>Previous lesson</Link></li>
                    <li className="list-inline-item"><Link to={`/Path/${path_Id}/Syllabus/${nextSyllabus}`} onClick={this._changeLesson.bind(this, nextSyllabus)}>Next lesson</Link></li>
                  </ul>
                </div>
              </div>
              <VideoPlayer ref="player" videos={syllabusReducer.syllabus.videos} layoutControl={true}/>
            </div>
            <div className="tool-box">
              <SyllabusDetailMaterials syllabus={this.props.payload.syllabusReducer.syllabus} {...this.props}/>
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
