import React, { Component } from 'react';
import Slick from 'react-slick';
import PracticeVideoModal from './practice_videoModal';

let settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: false,
}

class PracticeVideoSlide extends Component {
  constructor() {
    super();
    this.state = {
      slideSelect: '',
      slideSelectStatus: false,
    };
  }
  checkActiveSlide(index) {
    if (index === this.state.slideSelect && this.state.slideSelectStatus) {
      return 'slide-selected';
    } else if (this.state.slideSelectStatus && this.state.slideSelectStatus) {
      return 'slide-unselect';
    } else return null;
  }

  onClickSlide(video) {
    this.setState({video: video});
    this.props.initAction.showModal('modalPracticeVideo');
  }

  _initRenderData() {
    let practiceInfo = this.props.payload.pathReducer.practice,
        practices = practiceInfo.practices,
        data = practices.map((item, index)=>{
      return {
        title: item.name,
        imgSrc: 'http://cdn.mos.cms.futurecdn.net/b4e64eedd98062459a9fefb1f800ecdf-320-80.jpg',
        level: practiceInfo.level.name + ' ' + practiceInfo.instrument.name,
        instructor: item.uploader.first_name,
        url: item.url
      }
    });
    return (
      <Slick {...settings}>
      {data.map((data, index) =>
        <div key={index}
          className={`slideWrapper ${this.checkActiveSlide(index)}`}
          onClick={this.onClickSlide.bind(this, [data])}
        >
          <div className="slideBox cursorMouse">
            <div className="slideBox__img"><img alt="video slide" src={data.imgSrc}/></div>
            <div className="slideBox__info">
              <h3 className="slideBox__title">{data.title}</h3>
              <div className="slideBox__level">{data.level}</div>
              <div className="slideBox__author">{data.instructor}</div>
            </div>
          </div>
        </div>
      )}
    </Slick>
    )
  }

  render() {
    return (
      <div>
        {this._initRenderData()}
        <PracticeVideoModal {...this.props} video={this.state.video}/>
      </div>
    );
  }
}

export default PracticeVideoSlide;