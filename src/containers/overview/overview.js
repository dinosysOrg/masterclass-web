import React, {Component} from 'react';
import './overview.style.css';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, ResponsiveContainer} from 'recharts';

let data = [
  { subject: 'Skill 1', A: 120, B: 110, fullMark: 150 },
  { subject: 'Skill 2', A: 98, B: 130, fullMark: 150 },
  { subject: 'Skill 3', A: 86, B: 130, fullMark: 150 },
  { subject: 'Skill 4', A: 99, B: 100, fullMark: 150 },
  { subject: 'Skill 5', A: 85, B: 90, fullMark: 150 },
  { subject: 'Skill 6', A: 65, B: 85, fullMark: 150 },
];

/**
 * OverviewPage
 */
class OverviewPage extends Component {
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
      <div className="overview-page">
        <div className="video-box">
          <iframe title="video" className="iframe-video" src="https://www.youtube.com/embed/gyWUazuJBak?rel=0&amp;showinfo=0"></iframe>
        </div>
        <div className="row pt-4">
          <div className="col">
            <h4 className="title-overview pb-1">PATH DESCRIPTION</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, corporis! Dolor odio tempore autem aut quidem aliquam, nihil ea debitis natus ex vero reiciendis assumenda mollitia beatae. At, sint est.</p>
          </div>
          <div className="col">
            <h4 className="title-overview pb-1">OVERVIEW</h4>
            <ul className="list-group">
              <li>asdasd</li>
              <li>asdasd</li>
              <li>asdasd</li>
            </ul>
          </div>
        </div>
        <div className="row pl-3 pt-3">
          <h4 className="title-overview pb-1">TEACHER</h4>
          <div className="media">
              <img className="d-flex mr-3" src="http://via.placeholder.com/170x170"/> 
              <div className="media-body">
                <h5 className="mt-0 teacher-name">Teacher Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
          </div>
        </div>
        
        <div className="chartBox mt-4">
        <ResponsiveContainer>
            <RadarChart cy="47%" data={data}>
              <Radar name="My skill" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.6}/>
              <Radar name="My skill" dataKey="B" stroke="#ff4d04" fill="#ff4d04" fillOpacity={0.6}/>
              <PolarGrid gridType="circle" />
              <Legend/>
              <PolarAngleAxis fill="#fff" dataKey="subject" />
            </RadarChart>
          </ResponsiveContainer>
        </div>

      </div>
    );
  }
}

export default OverviewPage;
