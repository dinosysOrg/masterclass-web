import React, {Component} from 'react';

import FullVideoCatalog from '../../components/shared/full_video_catalog';
import PromoPanel from '../../components/shared/promo_panel';
import formatDataResponse from '../../configs/data.config';
import VideoPanel from '../../components/shared/video_panel';
import PropTypes from 'prop-types';
import './browse.style.css';

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
        <div className="container">
          <PromoPanel location={this.props.location} {...this.props}/>
            <VideoPanel data={browsePath} slideShow={3} location={this.props.location} />
          <PromoPanel location={this.props.location} {...this.props}/>
        </div>
      )
    } else {
      return (
        <div className="container">
          {browsePath.recommend.length !== 0 ? <FullVideoCatalog slideShow={4} title={this.context.t('recommend')} data={formatDataResponse(browsePath.recommend)} location={this.props.location} /> : null}
          <VideoPanel data={browsePath} slideShow={4} location={this.props.location} />
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
