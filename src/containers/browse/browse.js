import React, {Component} from 'react';

import VideoPanel from '../../components/shared/video_panel';
import PromoPanel from '../../components/shared/promo_panel';
import './browse.style.css';

/**
 * Browse of project
 */
class Browse extends Component {
  /**
   * check loading status
   * @return {html} html code 
   */
  checkLoading() {
    let browsePath = this.props.payload.pathReducer.browsePath;
    if (browsePath) {
      return (
        <div className="browse-page">
          <div className="container">
            <PromoPanel />
            {browsePath.recommend.length !== 0 ? <VideoPanel title="Recommended" videoList={browsePath.recommend} /> : null}
            {browsePath.popular.length !== 0 ? <VideoPanel title="Popular Path" videoList={browsePath.popular} /> : null}
            {browsePath.latest.length !== 0 ? <VideoPanel title="Latest Path" videoList={browsePath.latest} /> : null}
            {browsePath.guitar.length !== 0 ? <VideoPanel title="Guitar Path" videoList={browsePath.guitar} /> : null}
            {browsePath.vocals.length !== 0 ? <VideoPanel title="Vocal Path" videoList={browsePath.vocals} /> : null}
            <PromoPanel />
          </div>
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

export default Browse;
