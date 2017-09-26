import React, {Component} from 'react';
import PromoPanel from '../../components/shared/promo_panel';
import VideoPanel from '../../components/shared/video_panel';
import Search from '../../components/shared/search';
import './browse.style.css';
let settingSlide = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: false,
}
/**
 * Browse of project
 */
class Browse extends Component {
  /**
   * check loading status
   * @return {html} html code 
   * data={paths}
   */
  checkRecommend() {
    return (
      <div className="container-fluid">
        <PromoPanel {...this.props}/>
          <Search {...this.props} />
          <VideoPanel {...this.props} settingSlide={settingSlide}/>
        <PromoPanel {...this.props}/>
      </div>
    )
  }
  /**
   * render Browse template
   * @return {html} The template of Browse class
   */
  render() {
    return (
      <div className="browse-page">
        {this.checkRecommend()}
      </div>
    );
  }
}
export default Browse;
