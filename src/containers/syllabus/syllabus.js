import React, {Component} from 'react';
import './syllabus.style.css';
import Syllabus from '../../components/shared/syllabus';
import $ from 'jquery';
let syllabusData = [
  {
    title: "Lesson 1 - Lesson name Lesson 1",
    time: "1:30",
    images: "",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique temporibus atque seq.",
  },
  {
    title: "Lesson 2 - Lesson name Lesson 2",
    time: "2:30",
    images: "",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique temporibus atque seq.",
  },
  {
    title: "Lesson 3 - Lesson name Lesson 3",
    time: "3:30",
    images: "",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique temporibus atque seq.",
  },
  {
    title: "Lesson 4 - Lesson name Lesson 4",
    time: "4:30",
    images: "",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique temporibus atque seq.",
  }
]
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
    return (
      <div className="overview-page">
        <div id="accordion" className="syllabusList" role="tablist">
          {
            syllabusData.map((data, index) => 
              <Syllabus key={index} id={index} {...data} />
            )
          }
        </div>
      </div>
    );
  }
}

export default SyllabusPage;
