import React, {Component} from 'react';
import './syllabus.style.css';
import Syllabus from '../../components/shared/syllabus';
import $ from 'jquery';
/**
 * SyllabusPage
 */
class SyllabusPage extends Component {
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

  /**
   * @return {Component} - the rendered component
   */
  render() {
    let {syllabuses, id} = this.props.payload.pathReducer.pathOverview;
    return (
      <div className="overview-page">
        <div id="accordion" className="syllabusList" role="tablist">
          {
            syllabuses.map((data, key) => 
              <Syllabus subscribed={this.props.payload.pathReducer.pathOverview.subscribed} key={key} pathID={id} {...data} />
            )
          }
        </div>
      </div>
    );
  }
}

export default SyllabusPage;
