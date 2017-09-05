import React, {Component} from 'react';
import {MainMenu, ModalAuth} from '../../components';
import PropTypes from 'prop-types';
import * as IMG from '../../assets/images';
import './header.style.css';
/**
* Menu list
* @return {any}
* @param {any} props
*/
const ListMenu = (props) => (
  <li className="nav-item">
    <a className={`nav-link text-uppercase ${props.className}`} href="#" onClick={props.onClick}>
      {props.children}
    </a>
  </li>
);
/**
* Header of project
*/
class Header extends Component {
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
    const {loginStatus, userInfo} = this.props.payload.userReducer;
    const {userAction} = this.props;
    const {lang} = this.props;
    if (loginStatus === true) {
      return (
        <ul className="navbar-nav">
          {lang === 'en' ? <ListMenu className="nav-link-lang" onClick={this.changeLanguageToVi.bind(this)}>Vietnamese</ListMenu>
            : <ListMenu className="nav-link-lang" onClick={this.changeLanguageToEn.bind(this)}>English</ListMenu> }
          <ListMenu>{this.context.t('Hello {name}!', {name: userInfo.userName})}</ListMenu>
          <ListMenu onClick={userAction.signOut.bind(this)}>{this.context.t('Sign Out')}</ListMenu>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav">
          {lang === 'en' ? <ListMenu className="nav-link-lang" onClick={this.changeLanguageToVi.bind(this)}>Vietnamese</ListMenu>
            : <ListMenu className="nav-link-lang" onClick={this.changeLanguageToEn.bind(this)}>English</ListMenu> }
          <ListMenu onClick={this.handleModalLogin.bind(this)}>{this.context.t('Signup / Login')}</ListMenu>
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
      <div>
        <header className="header">
          <div className="container">
            <nav className="navbar navbar-expand-md">
              <a className="navbar-brand header__logo" href="/">
                <img src={IMG.default.logo} alt=""/>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <div className="mr-auto"/>
                {this.checkLogin()}
              </div>
            </nav>
            <ModalAuth />
          </div>
        </header>
        <MainMenu {...this.props} />
      </div>
    );
  }
}

Header.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Header;
