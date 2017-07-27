import React, {Component} from 'react';
import {MainMenu, ModalAuth} from '../../components';
/**
* Header of project
*/
class Header extends Component {
  /**
  * render Header
  * @param {any} props
  */
  constructor(props) {
    super(props);
    this.handleModalLogin = this.handleModalLogin.bind(this);
  }
  /**
  * render Header
  * @param {any} e
  */
  handleModalLogin(e) {
    e.preventDefault();
    this.props.initAction.showModal('modalAuth');
  }
  /**
  * render Header
  * @return {html} The template of Header class
  */
  render() {
    return (
      <header className="header">
        <h1 className="header__logo">MASTERCLASS VIET NAM</h1>
        <ul className="header__nav-language">
          <li>
            <a href="">Vietnamese</a>
          </li>
          <li>
            <a href="#" onClick={this.handleModalLogin}>
              Sign up / Log in
            </a>
          </li>
        </ul>
        <ModalAuth />
        <MainMenu />
      </header>
    );
  }
}

export default Header;
