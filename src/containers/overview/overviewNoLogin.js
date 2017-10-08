import React, {Component} from 'react';
import './overview.style.css';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis} from 'recharts';
import Syllabus from '../../components/shared/syllabus';
import $ from 'jquery';
import {formatDataMyPath} from '../../configs/data.config';
import storageConfig from '../../configs/storage.config';
import VideoPlayer from '../../components/shared/video_player';
/**
 * OverviewPage
 */
class OverviewNoLoginPage extends Component {
  /**
   * 
   */
  componentDidMount() {
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".iconList").removeClass('.iconList').addClass("active");
    }).on('hidden.bs.collapse', function(){
      $(this).parent().find(".iconList").removeClass('.iconList').removeClass("active");
    });
  }
  handleSub(id) {
    this.props.pathAction.subscribePathRequest(id)
    this.props.router.push('/MyPath')
  }
  /**
   * @return {Component} - the rendered component
   */
  render() {
    let {pathOverview} = this.props.payload.pathReducer;
    let data = formatDataMyPath(pathOverview);
    let video = {
      url: pathOverview.overview_video.url
    }
    return (
      <div className="overview-page">
        <div className="container">
          <div className="pageTitle">
            <h2 className="pageTitle__title text-uppercase">{pathOverview.name}</h2>
            <p className="pageTitle__sub text-uppercase">{pathOverview.level.name} {pathOverview.instrument.name}</p>
          </div>
          <div className="video-box-demo">
           <VideoPlayer videos={[video]} layoutControl={false} route={this.props.route}/>
          </div>
          <div className="row pt-4">
            <div className="col">
              <h4 className="title-overview pb-1">PATH DESCRIPTION</h4>
              <p>{pathOverview.description}</p>
              {storageConfig.getUserLocal() ? <div className="text-center pt-3"><button onClick={()=>this.handleSub(pathOverview.id)} className="btn btn-primary cursorMouse text-uppercase">subscribe path</button></div> : null}
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
          <div className="row pb-5 pt-5">
            <div className="col">
              <h4 className="title-overview pb-1">SYLLABUS</h4>
                <div id="accordion" className="syllabusList" role="tablist">
                  {
                    pathOverview.syllabuses.map((data, index) => 
                      <Syllabus showModal={true} initAction={this.props.initAction} key={index} {...data} />
                    )
                  }
                </div> 
                {/* End list */}
            </div>
            <div className="col">
              <div className="teacher">
                <h4 className="title-overview pb-1">TEACHER</h4>
                <div className="media">
                    <img className="d-flex mr-3" alt="images teacher" src="https://via.placeholder.com/150x150"/> 
                    <div className="media-body">
                      <h5 className="mt-0 teacher-name">{pathOverview.teacher.name}</h5>
                      {pathOverview.teacher.bio}
                    </div>
                </div>
              </div>
              <div className="chartBox mt-4">
                <ResponsiveContainer>
                  <RadarChart cy="47%" data={data.skill}>
                    <Radar name="Path Skill" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.5}/>
                    <PolarGrid gridType="circle" />
                    <Legend/>
                    <PolarAngleAxis fill="#fff" dataKey="subject" />
                    <PolarRadiusAxis tickCount={6} domain={[0, 150]}/>
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewNoLoginPage;
