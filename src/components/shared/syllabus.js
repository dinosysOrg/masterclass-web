import React, {Component} from 'react';
import {coverSecondToMinutes} from '../../configs/data.config';
import storageConfig from '../../configs/storage.config';
import {Link} from 'react-router';

class syllabusComponent extends Component {

  checkSub(){
    const {showModal} = this.props
    if(showModal && !storageConfig.getUserLocal()){
      return(
        <a className="cursorMouse" onClick={()=>this.props.initAction.showModal('modalAuth')} ><img className="d-flex mr-3" alt="images teacher" src="http://via.placeholder.com/80x80"/></a> 
      )
    } else if(storageConfig.getUserLocal() && this.props.subscribed) {
      return( 
        <Link to={`/Path/${this.props.pathID}/Syllabus/${this.props.id}`}><img className="d-flex mr-3" alt="images teacher" src="http://via.placeholder.com/80x80"/></Link>
      )
    } else{
      return( 
        <a className="cursorMouse" onClick={()=> alert('Please subscribe this path !')}><img className="d-flex mr-3" alt="images teacher" src="http://via.placeholder.com/80x80"/></a> 
      )
    }
  }
  render() {
  return (
    <div className="card mt-2">
      <div className="card-header" role="tab" id={`heading${this.props.id}`}>
        <div className="media">
          {
            this.checkSub()
          }
          <div className="media-body pr-5">
            <a className="syllabusList__title" data-toggle="collapse" href={`#collapse${this.props.id}`} aria-expanded="false" aria-controls={`collapse${this.props.id}`}>{this.props.title}</a>
            <p className="mb-0 syllabusList__time mt-1">{coverSecondToMinutes(this.props.time)}</p>
          </div>
        </div>
        <div data-toggle="collapse" href={`#collapse${this.props.id}`} aria-expanded="false" aria-controls={`collapse${this.props.id}`} className="iconList"/>
      </div>
      <div id={`collapse${this.props.id}`} className="collapse" role="tabpanel" aria-labelledby={`heading${this.props.id}`} data-parent="#accordion">
        <div className="card-body">
          {this.props.description}
        </div>
      </div>
    </div>
  )}
}
export default syllabusComponent;