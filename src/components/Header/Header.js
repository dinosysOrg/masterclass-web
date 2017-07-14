import React, {Component} from 'react';
import {MainMenu} from '../../components';

/**
 * Header of project
 */
class Header extends Component {
  /**
 * render Header
 * @return {html} The template of Header class
 */
  render() {
    return (
      <div id="Header">
        <h1 className="logo">MASTERCLASS VIET NAM</h1>
        <ul className="menu-language">
          <li><a href="">Vietnamese</a></li>
          <li><a href="">Sign up / Log in</a></li>
        </ul>
        <MainMenu/>
      </div>
    );
  }
}

export default Header;
