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
   * Represent "Full Video Catalog" component
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      searchText: '',
    };

    this._handleChange = this._handleChange.bind(this);
  }
  /**
   * Handle Input Change
   * @param {Event} e - the event object
   */
  checkAuthorized() {
    if (this.props.location.pathname === '/') {
      return (
        <div className="row mb-4">
          <div className="col-md-4">
          </div>
          <div className="col-md-8 text-right popularPath__viewall">
            <Link to="/ViewAll">{this.context.t('view all path')}</Link>
          </div>
        </div>
      )
    } else return null;
  }
  /**
   * Check data popular
   */
  /**
   * Handle Input Change
   * @param {Event} e - the event object
   */
  _handleChange(e) {
    this.setState({searchText: e.target.value});
  }
  /**
   * Check data popular
   */
  checkDataPopular() {
    return (
      <div className="pathRow mb-5 mt-5">
        <div className="container">
          <h3 className="mb-3 pathRow__title">{this.props.title} PATH</h3>
          {this.checkAuthorized()}
        </div>
        <VideoSlide settingSlide={this.props.settingSlide} data={this.props.data}/>
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
