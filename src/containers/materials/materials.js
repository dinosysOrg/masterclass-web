import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import {Link} from 'react-router';
import Icon from '../../components/shared/icon';
import './materials.style.css';
/**
 * MaterialsPage
 */
class MaterialsPage extends Component {
  /**
   * @return {Component} - the rendered component
   */
  render() {
    const {path_Id} = this.props.params;
    return (
      <div className="material-page">
        <div className="row mb-5">
          <div className="col text-center">
            <div className="circleProcess pb-3"><CircularProgressbar textForPercentage={(percentage) => `7/10`} percentage={50} initialAnimation={true}/></div>
            Lesson completed
          </div>
          <div className="col text-center">
            <div className="circleProcess pb-3"><CircularProgressbar textForPercentage={(percentage) => `1/4`} percentage={60} initialAnimation={true}/></div>
            Exercise sibmitted
          </div>
          <div className="col text-center">
            <div className="circleProcess pb-3"><CircularProgressbar textForPercentage={(percentage) => `2/5`} percentage={60} initialAnimation={true}/></div>
            Sheet downloaded
          </div>
        </div>
        <div className="teacher pt-3">
          <h5>TEACHERS</h5>
          <p>These teachers will answer your questions directly.</p>
          <div className="mb-2"><img className="d-flex mr-3" alt="images teacher" src="http://via.placeholder.com/150x150"/></div>
          <p>Teacher name 1</p>
        </div>
        <div className="text-center mt-5 mb-5"><Link to={`/Path/${path_Id}/QA`} className="btn btn-primary">SUBMIT A QUESTION</Link></div>
        <h5>LESSON NOTES</h5>
          <ul className="list-inline listMaterial">
            <li className="list-inline-item text-center">
              <a href="">
                <Icon name="lessonNote d-block mb-3" size={60}/>
                Lesson 1
              </a>
            </li>
            <li className="list-inline-item text-center">
              <a href="">
                <Icon name="lessonNote d-block mb-3" size={60}/>
                Lesson 2
              </a>
            </li>
            <li className="list-inline-item text-center">
              <a href="">
                <Icon name="lessonNote d-block mb-3" size={60}/>
                Lesson 3
              </a>
            </li>
            <li className="list-inline-item text-center">
              <a href="">
                <Icon name="lessonNote d-block mb-3" size={60}/>
                Lesson 4
              </a>
            </li>
            <li className="list-inline-item text-center">
              <a href="">
                <Icon name="lessonNote d-block mb-3" size={60}/>
                Lesson 5
              </a>
            </li>
            <li className="list-inline-item text-center">
              <a href="">
                <Icon name="lessonNote d-block mb-3" size={60}/>
                Lesson 6
              </a>
            </li>
          </ul>
          <h5 className="mt-5">MUSIC SHEET</h5>
            <ul className="list-inline listMaterial">
              <li className="list-inline-item text-center">
                <a href="">
                  <Icon name="musicSheet d-block mb-3" size={60}/>
                  Lesson 1
                </a>
              </li>
              <li className="list-inline-item text-center">
                <a href="">
                  <Icon name="musicSheet d-block mb-3" size={60}/>
                  Lesson 2
                </a>
              </li>
              <li className="list-inline-item text-center">
                <a href="">
                  <Icon name="musicSheet d-block mb-3" size={60}/>
                  Lesson 3
                </a>
              </li>
            </ul>
            <h5 className="mt-5">EXERCISES</h5>
            <ul className="list-inline listMaterial">
              <li className="list-inline-item text-center">
                <a href="">
                  <Icon name="exercise d-block mb-3" size={60}/>
                  Lesson 1
                </a>
              </li>
              <li className="list-inline-item text-center">
                <a href="">
                  <Icon name="exercise d-block mb-3" size={60}/>
                  Lesson 2
                </a>
              </li>
              <li className="list-inline-item text-center">
                <a href="">
                  <Icon name="exercise d-block mb-3" size={60}/>
                  Lesson 3
                </a>
              </li>
            </ul>
      </div>
    );
  }
}

export default MaterialsPage;
