import React, {Component} from 'react';
import './myPath.style.css';
import {Link} from 'react-router';
import * as Icon from 'react-icons/lib/fa/';
import PropTypes from 'prop-types';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis} from 'recharts';
import CircularProgressbar from 'react-circular-progressbar';
import * as _ from 'lodash';
import {Loading} from '../../components';
import {formatDataOverall} from '../../configs/data.config';
import Pagination from '../../components/pagination/pagination';

let exampleItems = _.range(100, 120).map(i => { 
  return { 
    course: {
      id: 1,
      instrument_id: 2,
      level_id: 2,  
      name: 'Path_' + i,
      teacher_id: 9,
      available: true,
      created_at: "2017-09-20T05:00:27.327Z",
      updated_at: "2017-09-20T05:00:27.327Z",
      description: "abc"
    },
    percent_completed: 21
  }
});

/**
 * PathPage
 */
class PathPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentSelect: 'Guitar',
      myCourses: this.props.payload.pathReducer.myCourses,
      dataMock: Object.assign(exampleItems, this.props.payload.pathReducer.myCourses.courses),
      pageOfItems: []
    };
  }
  // function onChangePage
  onChangePage(pageOfItems) {
      // update state with new page of items
      this.setState({ pageOfItems: pageOfItems });
  }
  // function handleInstrument
  handleInstrument(id, name) {
    this.setState({	instrumentSelect: name }, () => {
      this.props.pathAction.fetchOverallProgress(id)
    });
  }
  // function handleRemovePath
  handleRemovePath(id, key) {
    let data = this.state.pageOfItems;
    _.pullAt(data, [key])
    this.setState({
      pageOfItems: data
    })
    this.props.pathAction.unsubscribePathRequest(id)
  }
  // function renderButtonLink
  renderButtonLink(id, percent, key) {
    if (percent === 0) {
      return <div onClick={()=>this.handleRemovePath(id, key)} className="cursorMouse linkUnderline">Remove from my path</div>
    } else {
      return <Link to={`/Path/${id}`}>Continue learning</Link>
    }
  }
  renderLastPath() {
    const {last_course_visited} = this.state.myCourses;
    if(last_course_visited.percent_completed !== 0) {
      return(
        <div>
          <p className="p-3 mb-0 boxPath__title">Continue where you left</p>
          <table className="table w-100 tb-last-path">
            <thead>
              <tr>
                <th>Path name</th>
                <th>Progress</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-50"><Link to={`/Path/${last_course_visited.course.id}`}>{last_course_visited.course.name}</Link></td>
                <td>{last_course_visited.percent_completed}%</td>
                <td><Link to={`/Path/${last_course_visited.course.id}`}>Continue learning</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      return null
    }
  }
  checkLoading() {
    const {overallProgress} = this.props.payload.pathReducer;
    if (Object.keys(overallProgress).length >= 1){
      const overall = formatDataOverall(overallProgress)
      return(
        <div className="card-deck">
          <div className="col-md-4">
            <div className="colAwards p-3">
              <div className="card-group">
                <div className="card colAwards__hours">{overall.housrPractice}</div>
                <div className="card colAwards__colRight pb-4">HOURS<br/>OF PRACTICE</div>
              </div>
              <div className="card-group">
                <div className="card colAwards__hours">{overall.totalAwards}</div>
                <div className="card colAwards__colRight">
                  <h5 className="mt-2">AWARDS<br/>EARNED</h5>
                  <ul className="colAwards__list mt-2">
                    <li><Icon.FaThumbsUp size={30} fill="#fbdd10" /> 5 Hours of Practice</li>
                    <li><Icon.FaThumbsUp size={30} fill="#fbdd10" /> 5 Hours of Practice</li>
                    <li><Icon.FaThumbsUp size={30} fill="#fbdd10" /> 5 Hours of Practice</li>
                    <li className="disable"><Icon.FaThumbsUp size={30} fill="#fbdd10" /> 5 Hours of Practice</li>
                    <li className="disable"><Icon.FaThumbsUp size={30} fill="#fbdd10" /> 5 Hours of Practice</li>
                    <li className="disable"><Icon.FaThumbsUp size={30} fill="#fbdd10" /> 5 Hours of Practice</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End col */}
          <div className="col-md-3">
            <div className="colProcess py-3 pl-2">
              {
                overall.todalProgresses.map((items, index) => 
                  <div key={index} className="mt-4">
                    <div className="colProcess__circle"><CircularProgressbar percentage={items.percent} initialAnimation={true}/></div>
                    <div className="colProcess__title pl-2">{items.completed}/{items.total} {items.name}<span className="d-block">{items.status}</span></div>
                  </div>
                )
              }
            </div>
          </div>
          {/* End col */}
          <div className="col-md-5">
            <div className="colSkill p-3">
              <div className="chart">
                <ResponsiveContainer>
                  <RadarChart cy="42%" data={overall.mySkills}>
                    <Radar name="Instrument skill" dataKey="instrument_level" stroke="#fff" fill="#fff" fillOpacity={0.4}/>
                    <Radar name="My skill" dataKey="user_level" stroke="#ff4d04" fill="#ff4d04" fillOpacity={0.6}/>
                    <PolarGrid gridType="circle" />
                    <Legend/>
                    <PolarAngleAxis fill="#fff" dataKey="name" />
                    <PolarRadiusAxis tickCount={6} domain={[0, 150]}/>
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          {/* End col */}
        </div>
      )
    } else return <div className="miniLoading"><Loading/></div>
  }
  /**
  * @return {Component} - the rendered component
  */
  render() {
    const {listInstrument} = this.props.payload.pathReducer
    return (
      <div className="mypath-page py-5">
        <div className="container-content">
          <div className="row pb-4">
            <div className="col"><h4 className="title-page text-uppercase">{this.context.t('overall progress')}</h4></div>
            <div className="col text-right">
              <div className="row">
                <div className="col pt-2">
                  Selected Instrument:
                </div>
                <div className="col p-0">
                  <div className="dropdown selectInstrument">
                    <button className="btn dropdown-toggle cursorMouse selectInstrument__button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.instrumentSelect}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      {
                        listInstrument.entries.map((data, key) => 
                          <button key={key} className="dropdown-item cursorMouse" onClick={()=>this.handleInstrument(data.id, data.name)} type="button">{data.name}</button>
                        )
                      }
                    </div>
                  </div>
                  {/* Dropdow */}
                </div>
              </div>
            </div>
          </div>
          {this.checkLoading()}
          {/* End card */}
          <h4 className="pt-5 pb-3 text-uppercase">{this.context.t('path enrollment')}</h4>
          <div className="boxPath">
            {this.renderLastPath()}
            {/* End table */}
            <p className="pl-3 pt-1 mb-0 boxPath__title">All others</p>
            <table className="table w-100 tb-path">
              <thead>
                <tr>
                  <th>Path name</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.pageOfItems.map((data, key) =>
                    <tr key={key}>
                      <td className="w-50"><Link to={`/Path/${data.course.id}`}>{data.course.name}</Link></td>
                      <td>{data.percent_completed}%</td>
                      <td>
                        {this.renderButtonLink(data.course.id, data.percent_completed, key)}
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
            {/* End table */}
          <Pagination items={this.state.dataMock} onChangePage={this.onChangePage.bind(this)} />
          </div>

        </div>
      </div>
    );
  }
}
PathPage.contextTypes = {
  t: PropTypes.func.isRequired,
};
export default PathPage;
