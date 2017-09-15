import React, {Component} from 'react';
import './overview.style.css';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis} from 'recharts';
import {formatDataMyPath} from '../../configs/data.config';
/**
 * OverviewPage
 */
class OverviewPage extends Component {
  /**
   * @return {Component} - the rendered component
   */
  render() {
    let {pathOverview} = this.props.payload.pathReducer;
    let data = formatDataMyPath(pathOverview);
    return (
      <div className="overview-page">
        <div className="video-box">
          <iframe title="video" className="iframe-video" src="https://www.youtube.com/embed/gyWUazuJBak?rel=0&amp;showinfo=0"></iframe>
        </div>
        <div className="row pt-4">
          <div className="col">
            <h4 className="title-overview pb-1">PATH DESCRIPTION</h4>
            <p>{pathOverview.description}</p>
          </div>
          <div className="col">
            <h4 className="title-overview pb-1">OVERVIEW</h4>
            <ul className="list-inline list-overview">
              <li className="list-inline-item"><span className="list-overview-number">{pathOverview.total_syllabuses}</span>LESSONS</li>
              <li className="list-inline-item"><span className="list-overview-number">{pathOverview.total_sheets}</span>SHEETS</li>
              <li className="list-inline-item"><span className="list-overview-number">{pathOverview.total_exercises}</span>EXERCISES</li>
            </ul>
          </div>
        </div>
        <div className="row pl-3 pt-3">
          <h4 className="title-overview pb-1">TEACHER</h4>
          <div className="media">
              <img className="d-flex mr-3" alt="images teacher" src="http://via.placeholder.com/170x170"/> 
              <div className="media-body">
                <h5 className="mt-0 teacher-name">Teacher Name{pathOverview.teacher.name}</h5>
                {pathOverview.teacher.bio}
              </div>
          </div>
        </div>
        
        <div className="chartBox mt-4">
        <ResponsiveContainer>
            <RadarChart cy="47%" data={data.skill}>
              <Radar name="My skill" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.5}/>
              <Radar name="My skill" dataKey="B" stroke="#ff4d04" fill="#ff4d04" fillOpacity={0.6}/>
              <PolarGrid gridType="circle" />
              <Legend/>
              <PolarAngleAxis fill="#fff" dataKey="subject" />
              <PolarRadiusAxis tickCount={6} domain={[0, 150]}/>
            </RadarChart>
          </ResponsiveContainer>
        </div>

      </div>
    );
  }
}

export default OverviewPage;
