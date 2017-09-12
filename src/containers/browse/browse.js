import React, {Component} from 'react';

import FullVideoCatalog from '../../components/shared/full_video_catalog';
import PromoPanel from '../../components/shared/promo_panel';
import formatDataResponse from '../../configs/data.config';
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
          <PromoPanel />
            {browsePath.popular.length !== 0 ? <FullVideoCatalog title={this.context.t('popular')} data={formatDataResponse(browsePath.popular)} location={this.props.location} /> : null}
            {browsePath.latest.length !== 0 ? <FullVideoCatalog title={this.context.t('lastest')} data={formatDataResponse(browsePath.latest)} location={this.props.location} /> : null}
            {browsePath.guitar.length !== 0 ? <FullVideoCatalog title={this.context.t('guitar')} data={formatDataResponse(browsePath.guitar)} location={this.props.location} /> : null}
            {browsePath.vocals.length !== 0 ? <FullVideoCatalog title={this.context.t('vocals')} data={formatDataResponse(browsePath.vocals)} location={this.props.location} /> : null}
          <PromoPanel />
        </div>
      )
    } else {
      return (
        <div className="container">
          {browsePath.recommend.length !== 0 ? <FullVideoCatalog title={this.context.t('recommend')} data={formatDataResponse(browsePath.recommend)} location={this.props.location} /> : null}
          {browsePath.popular.length !== 0 ? <FullVideoCatalog title={this.context.t('popular')} data={formatDataResponse(browsePath.popular)} location={this.props.location} /> : null}
          {browsePath.latest.length !== 0 ? <FullVideoCatalog title={this.context.t('lastest')} data={formatDataResponse(browsePath.latest)} location={this.props.location} /> : null}
          {browsePath.guitar.length !== 0 ? <FullVideoCatalog title={this.context.t('guitar')} data={formatDataResponse(browsePath.guitar)} location={this.props.location} /> : null}
          {browsePath.vocals.length !== 0 ? <FullVideoCatalog title={this.context.t('vocals')} data={formatDataResponse(browsePath.vocals)} location={this.props.location} /> : null}
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
