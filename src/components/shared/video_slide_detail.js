import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import * as Icon from 'react-icons/lib/fa/';
import storageConfig from '../../configs/storage.config';
import {Link} from 'react-router';
class videoSlideDetail extends React.Component {
  renderBtnAddPath(id) {
    if(!this.props.hideAddPath) {
      return(
        <button type="button" onClick={this.props.handleSub.bind(this, id)} className="btn btn-second text-uppercase ml-3 cursorMouse">
          <Icon.FaPlusCircle size={18} fill="#000" /> ADD to my path
        </button>
      )
    } else return (
      <button type="button" onClick={this.props.removeSub.bind(this, id)} className="btn btn-second btn-danger text-uppercase ml-3 cursorMouse">
        <Icon.FaTrash size={18} fill="#000" /> Remove from my path
      </button>
    )
  }
  render() {
    const {slideDetail} = this.props
  return (
    <div className="slideDetail" style={{backgroundImage: `url(${slideDetail.imgSrc})`}}>
      <div className="container">
        <div className="row">
          {/* <div onClick={()=> this.props.slideDetailToggle()} className="btn-dropdown-slide cursorMouse"><Icon.FaAngleUp size={57}/></div> */}
          <div className="col slideDetail__colLeft">
            <div className="slideDetail__title">{slideDetail.title}</div>
            <div className="slideDetail__level">{slideDetail.level}</div>
            <div className="slideDetail__author">{slideDetail.instructor}</div>
            <p>{slideDetail.description}</p>
              <ul className="list-inline">
                <li className="list-inline-item"><Link to={`/Path/${slideDetail.id}`} className="btn btn-primary text-uppercase"><Icon.FaAlignLeft size={16} fill="#000" /> View path</Link></li>
                <li className="list-inline-item">{storageConfig.getUserLocal() ? this.renderBtnAddPath(slideDetail.id) : null}</li>
              </ul>
          </div>
          <div className="col slideDetail__colRight">
            <ResponsiveContainer>
              <RadarChart cy="47%" data={slideDetail.skill}>
                <Radar name="Path skill" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.4}/>
                {storageConfig.getUserLocal() ? <Radar name="My skill" dataKey="B" stroke="#ff4d04" fill="#ff4d04" fillOpacity={0.6}/> : null }
                <PolarGrid gridType="circle" />
                <Legend />
                <PolarAngleAxis fill="#fff" dataKey="subject" />
                <PolarRadiusAxis tickCount={6} domain={[0, 150]}/>
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default videoSlideDetail;