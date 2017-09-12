import React, {Component} from 'react';

import FullVideoCatalog from '../../components/shared/full_video_catalog';
import PromoPanel from '../../components/shared/promo_panel';
import formatDataResponse from '../../configs/data.config';
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
    let browsePath = this.props.payload.pathReducer.paths;
    if (browsePath) {
      return (
        <div className="browse-page">
          <div className="container">
            <PromoPanel />
            {browsePath.recommend.length !== 0 ? <FullVideoCatalog title="RECOMMEND" data={formatDataResponse(browsePath.recommend)} location={this.props.location} /> : null}
            {browsePath.popular.length !== 0 ? <FullVideoCatalog title="POPULAR" data={formatDataResponse(browsePath.popular)} location={this.props.location} /> : null}
            {browsePath.latest.length !== 0 ? <FullVideoCatalog title="LATEST" data={formatDataResponse(browsePath.latest)} location={this.props.location} /> : null}
            {browsePath.guitar.length !== 0 ? <FullVideoCatalog title="GUITAR" data={formatDataResponse(browsePath.guitar)} location={this.props.location} /> : null}
            {browsePath.vocals.length !== 0 ? <FullVideoCatalog title="VOCALS" data={formatDataResponse(browsePath.vocals)} location={this.props.location} /> : null}
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
