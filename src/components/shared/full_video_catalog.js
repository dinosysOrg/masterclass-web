import React, {Component} from 'react';
import VideoSlide from './video_slide';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

/**
 * Full Video Catalog
 * this component shows all videos for path
 * this component allows searching inside
 */
class FullVideoCatalog extends Component {
  /**
   * Check data popular
   */
  checkDataPopular() {
    return (
      <div className="pathRow mb-5 mt-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col"><h3 className="pathRow__title">{this.props.title} PATH</h3></div>
            {
              this.props.location.pathname === '/' ? 
              <div className="col text-right">
                <div className="popularPath__viewall">
                  <Link to="/ViewAll">{this.context.t('view all path')}</Link>
                </div>
              </div>
              : null
            }
          </div>
        </div>
        <VideoSlide {...this.props} settingSlide={this.props.settingSlide} data={this.props.data}/>
      </div>
    );
  }
  /**
   * Render this component
   * @return {Component}  component - a react component
   */
  render() {
    return (
      this.checkDataPopular()
    );
  }
}

FullVideoCatalog.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default FullVideoCatalog;
