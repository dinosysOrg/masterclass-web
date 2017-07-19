import React, {Component} from 'react';

import FullVideoCatalog from '../../components/shared/full_video_catalog';
import VideoPanel from '../../components/shared/video_panel';
import PromoPanel from '../../components/shared/promo_panel';

/**
 * Browse of project
 */
class Browse extends Component {
  /**
   * render Browse template
   * @return {html} The template of Browse class
   */
  render() {
    return (
      <div className="browse-page">
        <div className="container">
          <PromoPanel />
          <FullVideoCatalog />
          <VideoPanel title="Popular Paths" />
          <VideoPanel title="Lastest Paths" />
          <PromoPanel />
        </div>
      </div>
    );
  }
}

export default Browse;
