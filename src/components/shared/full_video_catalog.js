import React, {Component} from 'react';

import Panel from '../shared/panel';
import VideoLink from './video_link';

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
   * Render this component
   * @return {Component}  component - a react component
   */
  render() {
    return (
      <Panel title="Full Video Catalog">
        <form>
          <input type="text" value={this.state.searchText} placeholder="Refined Search" onChange={this._handleChange} />
        </form>

        <ul className="row">
          <li className="col">
            <VideoLink href="#" imgSrc="http://via.placeholder.com/327x184?text=>" text="JONNY - WALK THE LINE - GUITAR BEGINNER" />
          </li>
          <li className="col">
            <VideoLink href="#" imgSrc="http://via.placeholder.com/327x184?text=>" text="JONNY - WALK THE LINE - GUITAR BEGINNER" />
          </li>
          <li className="col">
            <VideoLink href="#" imgSrc="http://via.placeholder.com/327x184?text=>" text="JONNY - WALK THE LINE - GUITAR BEGINNER" />
          </li>
        </ul>

        <a href="#">View all</a>
      </Panel>
    );
  }
}

export default FullVideoCatalog;
