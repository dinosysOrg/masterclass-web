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
      <div className="header">
        <h1 className="header__logo">MASTERCLASS VIET NAM</h1>
        <ul className="header__nav-language">
          <li>
            <a href="">Vietnamese</a>
          </li>
          <li>
            <a href="">Sign up / Log in</a>
          </li>
        </ul>
        <MainMenu />
      </div>
    );
  }
}

export default Header;
