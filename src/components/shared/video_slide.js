import React from 'react';
import Slick from 'react-slick';
import SlideDetail from './video_slide_detail';

let data = [
  {
    id: 1,
    title: 'Trinity 1',
    level: 'Level Instrument',
    instructor: 'Ms. Jonny',
    imgSrc: 'https://allwallpapers.info/wp-content/uploads/2016/05/8081-playing-the-guitar-1920x1080-music-wallpaper.jpeg',
    skill: [
      {subject: 'Skill 1', A: 120, B: 50, full: 150},
      {subject: 'Skill 2', A: 120, B: 110, full: 150},
      {subject: 'Skill 3', A: 120, B: 110, full: 150},
      {subject: 'Skill 4', A: 120, B: 110, full: 150},
      {subject: 'Skill 5', A: 120, B: 110, full: 150},
    ],
  },
  {
    id: 2,
    title: 'Trinity 2',
    level: 'Level Instrument',
    instructor: 'Ms. Jonny',
    imgSrc: 'https://livewallpaper.info/wp-content/uploads/2017/02/guitar-wallpaper-High-Resolution-Download1.jpg',
    skill: [
      {subject: 'Skill 1', A: 120, B: 80, full: 150},
      {subject: 'Skill 2', A: 120, B: 110, full: 150},
      {subject: 'Skill 3', A: 120, B: 110, full: 150},
      {subject: 'Skill 4', A: 120, B: 110, full: 150},
      {subject: 'Skill 5', A: 120, B: 110, full: 150},
    ],
  },
  {
    id: 3,
    title: 'Trinity 3',
    level: 'Level Instrument',
    instructor: 'Ms. Jonny',
    imgSrc: 'http://wallpaper.pickywallpapers.com/1920x1080/taylor-guitar.jpg',
    skill: [
      {subject: 'Skill 1', A: 120, B: 10, full: 150},
      {subject: 'Skill 2', A: 120, B: 110, full: 150},
      {subject: 'Skill 3', A: 120, B: 110, full: 150},
      {subject: 'Skill 4', A: 120, B: 110, full: 150},
      {subject: 'Skill 5', A: 120, B: 110, full: 150},
    ],
  },
  {
    id: 4,
    title: 'Trinity 4',
    level: 'Level Instrument',
    instructor: 'Ms. Jonny',
    imgSrc: 'https://wallpapercave.com/wp/YnXBXD3.jpg',
    skill: [
      {subject: 'Skill 1', A: 120, B: 20, full: 150},
      {subject: 'Skill 2', A: 120, B: 110, full: 150},
      {subject: 'Skill 3', A: 120, B: 110, full: 150},
      {subject: 'Skill 4', A: 120, B: 110, full: 150},
      {subject: 'Skill 5', A: 120, B: 110, full: 150},
    ],
  },
  {
    id: 5,
    title: 'Trinity 5',
    level: 'Level Instrument',
    instructor: 'Ms. Jonny',
    imgSrc: 'https://allwallpapers.info/wp-content/uploads/2016/05/4288-guitar-1920x1080-music-wallpaper.jpeg',
    skill: [
      {subject: 'Skill 1', A: 120, B: 50, full: 150},
      {subject: 'Skill 2', A: 120, B: 110, full: 150},
      {subject: 'Skill 3', A: 120, B: 110, full: 150},
      {subject: 'Skill 4', A: 120, B: 110, full: 150},
      {subject: 'Skill 5', A: 120, B: 110, full: 150},
    ],
  },
  {
    id: 6,
    title: 'Trinity 6',
    level: 'Level Instrument',
    instructor: 'Ms. Jonny',
    imgSrc: 'http://eskipaper.com/images/acoustic-guitar-2.jpg',
    skill: [
      {subject: 'Skill 1', A: 120, B: 150, full: 150},
      {subject: 'Skill 2', A: 120, B: 110, full: 150},
      {subject: 'Skill 3', A: 120, B: 110, full: 150},
      {subject: 'Skill 4', A: 120, B: 110, full: 150},
      {subject: 'Skill 5', A: 120, B: 110, full: 150},
    ],
  },
];

/**
 * Video Slide Catalog
 */
class videoSlide extends React.Component {
  /**
   * Represent "Full Video Catalog" component
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      slideSelect: '',
      slideSelectStatus: false,
      slideDetail: '',
    };
  }
  /**
  * onClick slide
  * @param {object} props
  * @param {any} index
  */
  onClickSlide(props, index) {
    this.setState({
      slideSelectStatus: true,
      slideDetailStatus: false,
      slideSelect: index,
      slideDetail: props,
    });
  }
  /**
  * checkActiveSlide slide
  * @param {any} index
  * @return {html}
  */
  checkActiveSlide(index) {
    if (index === this.state.slideSelect) {
      return 'slide-selected';
    } else if (this.state.slideSelectStatus) {
      return 'slide-unselect';
    } else null;
  }
  /**
  * renderDetail slide
  * @param {any} data
  * @return {html}
  */
  renderDetail(data) {
    if (data) {
      return (
        <SlideDetail {...data}></SlideDetail>
      );
    } else return null;
  }
  /**
   * render slide
   * @return {html} The template of HomePage class
   */
  render() {
    let settings = {
      infinite: true,
      speed: 500,
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
    };
    return (
      <div>
        <Slick {...settings}>
          {data.map((data, index) =>
            <div key={index}
              className={`slideWrapper ${this.checkActiveSlide(index)}`}
              onClick={this.onClickSlide.bind(this, data, index)}
            >
              <div className="slideBox">
                <div className="slideBox__img"><img src={data.imgSrc}/></div>
                <div className="slideBox__info">
                  <h3 className="slideBox__title">{data.title}</h3>
                  <div className="slideBox__level">{data.level}</div>
                  <div className="slideBox__author">{data.instructor}</div>
                </div>
              </div>
            </div>
          )}
        </Slick>
        {this.state.slideDetail ? <SlideDetail {...this.state.slideDetail} /> : null}
      </div>
    );
  }
}
export default videoSlide;
