import React, {Component} from 'react';
import {MainMenu, ModalAuth} from '../../components';
import PropTypes from 'prop-types';
import * as IMG from '../../assets/images';
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {this.checkLogin()}
          <ModalAuth />
          <MainMenu />
        </div>
      </header>
    );
  }
}

Header.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Header;
