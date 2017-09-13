import React from 'react';
import {Link} from 'react-router-dom';
export default (props) => {
  return (
    <div className="card mt-2">
      <div className="card-header" role="tab" id={`heading${props.id}`}>
        <div className="media">
          <Link to="/Path/10/Syllabus/20"><img className="d-flex mr-3" alt="images teacher" src="http://via.placeholder.com/80x80"/></Link>
          <div className="media-body pr-5">
            <a className="syllabusList__title" data-toggle="collapse" href={`#collapse${props.id}`} aria-expanded="false" aria-controls={`collapse${props.id}`}>{props.title}</a>
            <p className="mb-0 syllabusList__time mt-1">{props.time}</p>
          </div>
        </div>
        <a data-toggle="collapse" href={`#collapse${props.id}`} aria-expanded="false" aria-controls={`collapse${props.id}`} className="iconList"/>
      </div>
      <div id={`collapse${props.id}`} className="collapse" role="tabpanel" aria-labelledby={`heading${props.id}`} data-parent="#accordion">
        <div className="card-body">
          {props.content}
        </div>
      </div>
    </div>
  );
};