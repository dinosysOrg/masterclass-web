import React, {Component} from 'react';
import './myPath.style.css';
import {Link} from 'react-router-dom';
import * as Icon from 'react-icons/lib/fa/';
import PropTypes from 'prop-types';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, ResponsiveContainer} from 'recharts';
import CircularProgressbar from 'react-circular-progressbar';

let data = [
  { subject: 'Skill 1', A: 120, B: 110, fullMark: 150 },
  { subject: 'Skill 2', A: 98, B: 130, fullMark: 150 },
  { subject: 'Skill 3', A: 86, B: 130, fullMark: 150 },
  { subject: 'Skill 4', A: 99, B: 100, fullMark: 150 },
  { subject: 'Skill 5', A: 85, B: 90, fullMark: 150 },
  { subject: 'Skill 6', A: 65, B: 85, fullMark: 150 },
];

/**
 * PathPage
 */
class PathPage extends Component {
  /**
   * @return {Component} - the rendered component
   */
  render() {
    return (
      <div className="mypath-page py-5">
        <div className="container">
          <div className="row pb-4">
            <div className="col"><h4 className="title-page text-uppercase">{this.context.t('overall progress')}</h4></div>
            <div className="col text-right">
              <div className="row">
                <div className="col pt-2">
                  Selected Instrument:
                </div>
                <div className="col p-0">
                  <div className="dropdown selectInstrument">
                    <button className="btn dropdown-toggle selectInstrument__button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button className="dropdown-item" type="button">Action</button>
                      <button className="dropdown-item" type="button">Another action</button>
                      <button className="dropdown-item" type="button">Something else here</button>
                    </div>
                  </div>
                  {/* Dropdow */}
                </div>
              </div>
               
            </div>
          </div>
          <div className="card-deck">
            <div className="col-md-4">
              <div className="colAwards p-3">
                <div className="card-group">
                  <div className="card colAwards__hours">7.5</div>
                  <div className="card colAwards__colRight pb-4">HOURS<br/>OF PRACTICE</div>
                </div>
                <div className="card-group">
                  <div className="card colAwards__hours">2</div>
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
              <div className="colProcess p-3">
                <div>
                  <div className="colProcess__circle"><CircularProgressbar percentage={60} initialAnimation={true}/></div>
                  <div className="colProcess__title pl-3">3/4 lessons<br/>completed</div>
                </div>
                <div className="mt-4">
                  <div className="colProcess__circle"><CircularProgressbar percentage={60} initialAnimation={true}/></div>
                  <div className="colProcess__title pl-3">1/3 excercises<br/>submited</div>
                </div>
                <div className="mt-4">
                  <div className="colProcess__circle"><CircularProgressbar percentage={60} initialAnimation={true}/></div>
                  <div className="colProcess__title pl-3">1/5 sheets<br/>downloaded</div>
                </div>
              </div>
            </div>
            {/* End col */}
            <div className="col-md-5">
              <div className="colSkill p-3">
                <div className="chart">
                  <ResponsiveContainer>
                    <RadarChart cy="42%" data={data}>
                      <Radar name="My skill" dataKey="B" stroke="#ff4d04" fill="#ff4d04" fillOpacity={0.6}/>
                      <PolarGrid gridType="circle" />
                      <Legend/>
                      <PolarAngleAxis fill="#fff" dataKey="subject" />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>
          {/* End card */}
          <h4 className="pt-5 pb-3 text-uppercase">{this.context.t('path enrollment')}</h4>
          <div className="boxPath">
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
                  <td>Lorem Ipsum</td>
                  <td>83%</td>
                  <td><Link to="/Path/10">Continue learning</Link></td>
                </tr>
              </tbody>
            </table>
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
                <tr>
                  <td>Lorem Ipsum</td>
                  <td>83%</td>
                  <td>Continue learning</td>
                </tr>
                <tr>
                  <td>Lorem Ipsum</td>
                  <td>83%</td>
                  <td>Continue learning</td>
                </tr>
                <tr>
                  <td>Lorem Ipsum</td>
                  <td>83%</td>
                  <td>Continue learning</td>
                </tr>
                <tr>
                  <td>Lorem Ipsum</td>
                  <td>83%</td>
                  <td>Continue learning</td>
                </tr>
                <tr>
                  <td>Lorem Ipsum</td>
                  <td>83%</td>
                  <td>Continue learning</td>
                </tr>
                <tr>
                  <td>Lorem Ipsum</td>
                  <td>83%</td>
                  <td>Continue learning</td>
                </tr>
              </tbody>
            </table>
            {/* End table */}
            <nav aria-label="Page navigation example" className="pb-1">
              <ul className="pagination justify-content-center">
                <li className="page-item active"><a className="page-link" href="">1</a></li>
                <li className="page-item"><a className="page-link" href="">2</a></li>
                <li className="page-item"><a className="page-link" href="">3</a></li>
                <li className="page-item"><a className="page-link" href="">4</a></li>
                <li className="page-item"><a className="page-link" href="">5</a></li>
              </ul>
            </nav>
            {/* navigation */}
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
