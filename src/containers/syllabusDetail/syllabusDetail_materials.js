import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../../components/shared/icon';
import _ from 'lodash';

class SyllabusDetailMaterials extends Component {
  componentWillReceiveProps(nextProps) {
    let sheetURL = nextProps.payload.pathReducer.sheetURL;
    if (sheetURL) {
      if (!_.isEmpty(this.props.payload.pathReducer.sheetURL)) {
        let link = document.createElement('a');
        link.href = sheetURL.sheet_url;
        link.download = 'file.pdf';
        link.dispatchEvent(new MouseEvent('click'));
      }
    }
  }

  _downloadNote() {
    let link = document.createElement('a');
    link.href = this.props.syllabus.note_url;
    link.download = 'file.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }

  _downloadSheet(e) {
    const {path_Id} = this.props.params;
    const {syllabus_Id} = this.props.params;
    let id = this.props.syllabus.sheet.id,
        data = {
          path_Id: path_Id,
          syllabus_Id: syllabus_Id,
          id: id
        },
        sheetURL = this.props.payload.pathReducer.sheetURL;
    if (_.isEmpty(sheetURL)) {
      this.props.pathAction.fetchSheet(data);
    } else {
      let link = document.createElement('a');
      link.href = sheetURL.sheet_url;
      link.download = 'file.pdf';
      link.dispatchEvent(new MouseEvent('click'));
    } 
  }

  _downloadExercise() {
    let link = document.createElement('a');
    link.href = this.props.syllabus.exercises[0].url;
    link.download = 'file.pdf';
    link.dispatchEvent(new MouseEvent('click'));
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

SyllabusDetailMaterials.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default SyllabusDetailMaterials;