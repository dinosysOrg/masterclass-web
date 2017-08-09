import React, {Component} from 'react';
import {MainMenu, ModalAuth} from '../../components';
import PropTypes from 'prop-types';
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
  * Change language to Vi
  */
  changeLanguageToVi() {
    this.props.initAction.changeLanguageVI();
  }
  /**
  * Change language to En
  */
  changeLanguageToEn() {
    this.props.initAction.changeLanguageEN();
  }
  /**
  * render Header
  * @return {any}
  */
  checkLogin() {
    if (this.props.payload.userReducer.loginStatus === true) {
      return (
        <ul className="header__nav-language">
          {this.props.lang === 'en' ? <li><a onClick={() => this.changeLanguageToVi()}>Vietnamese</a></li>
            : <li><a onClick={() => this.changeLanguageToEn()}>English</a></li>}
          <li>
            <a>
              {this.context.t('Hello {name}!', {name: this.props.payload.userReducer.userInfo.userName})}
            </a>
          </li>
          <li><a href="#" onClick={()=>this.props.userAction.signOut()}>{this.context.t('Sign Out')}</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="header__nav-language">
          <li>
            <a href="#" onClick={this.handleModalLogin}>
              {this.context.t('Sign In')}
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

Header.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Header;
