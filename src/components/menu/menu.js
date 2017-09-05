import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './menu.style.css';
/**
 * Main menu of header
 */
class MainMenu extends Component {
  /**
   * check menu fuc
   * @return {html} The template of menu class
   */
  checkMenu() {
    const {pathname} = this.props.location;
    const {loginStatus} = this.props.payload.userReducer;
    if (loginStatus) {
      return (
        <div className="main-menu">
          <div className="container">
            <ul className="nav nav-main-menu">
              <li className={`nav-item ${pathname === '/' ? 'active' : null}`}>
                <Link className="nav-link text-uppercase" to="/">Home</Link>
              </li>
              <li className={`nav-item ${pathname === '/Browse' ? 'active' : null}`}>
                <Link className="nav-link text-uppercase" to="/Browse">Browse</Link>
              </li>
              <li className={`nav-item ${pathname === '/Path' ? 'active' : null}`}>
                <Link className="nav-link text-uppercase" to="/Path">My Paths</Link>
              </li>
              <li className={`nav-item ${pathname === '/Profile' ? 'active' : null}`}>
                <Link className="nav-link text-uppercase" to="/Profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  /**
   * render menu template
   * @return {html} The template of menu class
   */
  render() {
    return this.checkMenu();
  }
}
export default MainMenu;
