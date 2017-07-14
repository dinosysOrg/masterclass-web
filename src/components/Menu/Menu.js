import React, {Component} from 'react';
import {Link} from 'react-router-dom';
/**
 * Main menu of header
 */
class MainMenu extends Component {
  /**
   * render menu template 
   * @return {html} The template of menu class
   */
  render() {
    return (
      <div className="container">
        <ul id="Menu">
          <li><Link to="/">HOME</Link></li>
          <li>|</li>
          <li><Link to="/Browse">BROWSE</Link></li>
          <li>|</li>
          <li><Link to="/Dashboard">MY DASHBOARD</Link></li>
          <li>|</li>
          <li><Link to="/Profile">PROFILE</Link></li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;
