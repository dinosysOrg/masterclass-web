import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import * as Icon from 'react-icons/lib/fa/';
import storageConfig from '../../configs/storage.config';
import {Link} from 'react-router';

export default (props) => {
  return (
    <div className="slideDetail" style={{backgroundImage: `url(${props.imgSrc})`}}>
      <div className="container">
        <div className="row">
          <div className="col slideDetail__colLeft">
            <div className="slideDetail__title">{props.title}</div>
            <div className="slideDetail__level">{props.level}</div>
            <div className="slideDetail__author">{props.instructor}</div>
            <p>{props.description}</p>
            <div className="list-inline">
              <Link to={`/Path/${props.id}`} className="btn btn-primary text-uppercase"><Icon.FaAlignLeft size={16} fill="#000" /> View path</Link>
              <button type="button" className="btn btn-second text-uppercase ml-3"><Icon.FaPlusCircle size={18} fill="#000" /> ADD to my path</button>
            </div>
          </div>
          <div className="col slideDetail__colRight">
            <RadarChart cx={250} cy={200} outerRadius={150} width={500} height={450} data={props.skill}>
              <Radar name="Path skill" dataKey="A" stroke="#fff" fill="#fff" fillOpacity={0.4}/>
              {storageConfig.getUserLocal() ? <Radar name="My skill" dataKey="B" stroke="#ff4d04" fill="#ff4d04" fillOpacity={0.6}/> : null }
              <PolarGrid gridType="circle" />
              <Legend />
              <PolarAngleAxis fill="#fff" dataKey="subject" />
              <PolarRadiusAxis tickCount={6} domain={[0, 150]}/>
            </RadarChart>
          </div>
        </div>
      </div>
    </div>
  );
};
