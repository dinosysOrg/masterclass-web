import React, {Component} from 'react';
import PromoPanel from '../../components/shared/promo_panel';
import VideoPanel from '../../components/shared/video_panel';
import PropTypes from 'prop-types';
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
   */
  checkRecommend(browsePath) {
    return (
      <div className="container-fluid">
        <PromoPanel location={this.props.location} {...this.props}/>
          <Search {...this.props} />
          <VideoPanel data={browsePath} settingSlide={settingSlide} location={this.props.location} />
        <PromoPanel location={this.props.location} {...this.props}/>
      </div>
    )
  }
  /**
   * check loading status
   * @return {html} html code 
   */
  checkLoading() {
    let browsePath = this.props.payload.pathReducer.paths;
    if (browsePath) {
      return (
        <div className="browse-page">
          {this.checkRecommend(browsePath)}
        </div>
      );
    } 
  }
  /**
   * render Browse template
   * @return {html} The template of Browse class
   */
  render() {
    return (
      <div>
        {this.checkLoading()}
      </div>
    );
  }
}

Browse.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Browse;
