import React, {Component} from 'react';

import VideoPanel from '../../components/shared/video_panel';
import PromoPanel from '../../components/shared/promo_panel';

/**
 * 
 */
class PathPage extends Component {
  /**
   * 
   */
  componentDidMount() {
    const {fetchPath} = this.props;
    fetchPath();
  }

  /**
   * @return {Component} - the rendered component
   */
  render() {
    const {path} = this.props;

    return (
      <div className="path-page">
        <div className="container">
          {Object.keys(path).length === 0 && path.constructor === Object
            ? <h4>LOADING--------------->>>></h4>
            : <div className="row">
              <div className="col s12 m10">
                <h4>{`${path.name} | ${path.teacher.name}`}</h4>

                <video width="100%" height="60%" src={path.overview_video.url} controls />

                <h5>Path Description</h5>

                <p>
                  {path.description}
                </p>

                <h5>Overview</h5>

                <ul className="row">
                  <li className="col s12 m4">
                    <h3>{path.total_syllabuses}</h3>
                    <p>Lessons</p>
                  </li>
                  <li className="col s12 m4">
                    <h3>{path.total_sheets}</h3>
                    <p>Sheets</p>
                  </li>
                  <li className="col s12 m4">
                    <h3>{path.total_exercises}</h3>
                    <p>Excercises</p>
                  </li>
                </ul>


                <h5>Syllabus</h5>

                <ul className="row">
                  {path.syllabuses.map((lesson) =>
                    <li className="col s12 m4" key={lesson.id}>
                      {/* <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />*/}
                      <video width="90%" height="90%" src="https://www.w3schools.com/tags/movie.ogg" />
                      <p>{lesson.title}</p>
                    </li>
                  )}
                </ul>

                <a href="#">View all videos</a>

                <h5>Teacher</h5>

                <img src={path.teacher.image} width="100px" height="100px" alt="teacher avatar" />
                <h6>Teacher Biography</h6>
                <p>
                  {path.teacher.bio}
                </p>
                <a href="#">View all teachers</a>

                <VideoPanel title="Related Paths" />

                <PromoPanel />
              </div>
              <div className="col s12 m2">
                <PromoPanel />
              </div>
            </div>}
        </div>
      </div>
    );
  }
}

export default PathPage;
