import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../../components/shared/icon';

class SyllabusDetailTools extends Component {
  _downloadNote() {
    //WAIT API
  }

  _downloadSheet() {
    //WAIT API
  }

  _downloadExercise() {
    //WAIT API
  }
  render() {
    return (
        <div className="syllabus-tool clearfix">
          <div className="float-left">

          </div>
          <div className="float-right">
            <div className="syllabus-note" onClick={this._downloadNote.bind(this)}>
              <Icon name='exercise' size={40}/>
              <span>LESSON NOTES</span>
            </div>
            <div className="syllabus-sheet" onClick={this._downloadSheet.bind(this)}>
              <Icon name='musicSheet' size={40}/>
              <span>MUSIC SHEET</span>
            </div>
            <div className="syllabus-exercise" onClick={this._downloadExercise.bind(this)}>
              <Icon name='micRecord' size={40}/>
              <span>EXERCISE</span>
            </div>
          </div>
        </div>
    );
  }
}

SyllabusDetailTools.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default SyllabusDetailTools;