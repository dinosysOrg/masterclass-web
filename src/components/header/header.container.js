import React, {Component} from 'react';
import {MainMenu, ModalAuth} from '../../components';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as initAction from '../../redux/loading/loading.action';
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
    this.state = {
      showModal: false,
    };
    this.handleModalLogin = this.handleModalLogin.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }
  /**
  * render Header
  * @param {any} e
  */
  handleModalLogin(e) {
    e.preventDefault();
    this.props.iniAction.showModal();
    // this.setState({showModal: !this.state.showModal});
  }
  /**
  * render Header
  * @param {any} modal
  */
  onCloseModal(modal) {
    // this.setState({showModal: modal});
  }
  /**
  * render Header
  * @return {html} The template of Header class
  */
  render() {
    console.log(this.props);
    const {modalStatus} = this.props.payload.loadingReducer;
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
        <ModalAuth onCloseModal={this.onCloseModal} onRequestClose={this.handleModalLogin} isOpen={modalStatus} />
        <MainMenu />
      </header>
    );
  }
}
const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    iniAction: bindActionCreators(initAction, dispatch),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
