import React, {Component} from 'react';

import Panel from '../shared/panel';
import VideoLink from './video_link';
import VideoSlide from './video_slide';

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
  _handleChange(e) {
    this.setState({searchText: e.target.value});
  }
  /**
   * Check data popular
   */
  checkDataPopular() {
    if(this.props.payload.pathReducer.hasOwnProperty('paths') && this.props.payload.pathReducer.paths.popular.length !== 0) {
      return (
        <div className="popularPath">
          <div className="container mb-4">
            <h3 className="mb-3 popularPath__title">POPULAR PATH</h3>
            <div className="row">
              <div className="col-md-4">
                <form>
                  <input type="text" value={this.state.searchText} placeholder="Refined Search" onChange={this._handleChange} />
                </form>
              </div>
              <div className="col-md-8 text-right popularPath__viewall">
                <a href="#">View all paths</a>
              </div>
            </div>
          </div>
          <VideoSlide {...this.props}/>
        </div>
      );
    } else {
      return null
    }
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

export default FullVideoCatalog;
