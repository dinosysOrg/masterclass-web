import React, {Component} from 'react';
import './path.style.css';
import {Link} from 'react-router-dom';
/**
 * PathPage
 */
class PathPage extends Component {
  componentDidMount() {
  }
  /**
   * @return {Component} - the rendered component
   */
  render() {
    return (
      <div className="path-page">
        <div className="container">
          <Link to="/Path/Overview">go to over view</Link>
        </div>
      </div>
    );
  }
}

export default PathPage;
