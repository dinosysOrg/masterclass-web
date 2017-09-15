import React from 'react';
import Slick from 'react-slick';
import SlideDetail from './video_slide_detail';
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
    } else return null;
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
      ...this.props.settingSlide
    };
    return (
      <div>
        <Slick {...settings}>
          {this.props.data.map((data, index) =>
            <div key={index}
              className={`slideWrapper ${this.checkActiveSlide(index)}`}
              onClick={this.onClickSlide.bind(this, data, index)}
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
        {this.state.slideDetail ? <SlideDetail {...this.state.slideDetail} /> : null}
      </div>
    );
  }
}
export default videoSlide;
