import React, {Component} from 'react';

import FullVideoCatalog from '../../components/shared/full_video_catalog';
import PromoPanel from '../../components/shared/promo_panel';
import {formatArrayData} from '../../configs/data.config';
import VideoPanel from '../../components/shared/video_panel';
import PropTypes from 'prop-types';
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
    if (browsePath.recommend.length === 0) {
      return (
        <div className="container-fluid">
          <PromoPanel location={this.props.location} {...this.props}/>
            <VideoPanel data={browsePath} settingSlide={settingSlide} location={this.props.location} />
          <PromoPanel location={this.props.location} {...this.props}/>
        </div>
      )
    } else {
      return (
        <div className="container-fluid">
          <VideoPanel data={browsePath} settingSlide={settingSlide} location={this.props.location} />
        </div>
      )
    }
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
