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
  * @return {any}
  */
  checkLogin() {
    if (this.props.payload.initReducer.loginStatus === true) {
      return (
        <ul className="header__nav-language">
          <li><a href="">Vietnamese</a></li>
          <li>
            <a href="#">
              {this.props.payload.initReducer.userInfo.Uid}
            </a>
          </li>
          <li><a href="#" onClick={()=>this.props.userAction.signOut()}>Đăng xuất</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="header__nav-language">
          <li>
            <a href="#" onClick={this.handleModalLogin}>
                Sign up / Log in
            </a>
          </li>
        </ul>
      );
    }
  }
  /**
  * render Header
  * @return {html} The template of Header class
  */
  render() {
    return (
      <header className="header">
        <h1 className="header__logo">MASTERCLASS VIET NAM</h1>
        {this.checkLogin()}
        <ModalAuth />
        <MainMenu />
      </header>
    );
  }
}

export default Header;
