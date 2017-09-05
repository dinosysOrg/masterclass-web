import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import FacebookLogin from 'react-facebook-login';
import SignUpForm from './signup_form';
import LoginForm from './login_form';
import './modal_auth.style.css';
/**
* Modal of project
*/
class Modal extends Component {
  /**
   * render Header
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  /**
   * changeTab Object
   * @param {number} tabIndex
   */
  onChangeTab(tabIndex) {
    this.props.userAction.clearError();
    this.setState({
      tabIndex,
    });
  }
  /**
   * Submit Login
   * @param {object} response
   */
  responseFacebook(response) {
    if (response.accessToken) {
      this.props.userAction.fbRequest(response.accessToken);
    }
  }
  /**
   * Submit Login
   * @param {object} values
   */
  onSubmitLogin(values) {
    this.props.userAction.loginRequest(values);
  }
  /**
   * Submit Register
   * @param {object} values
   */
  onSubmitRegister(values) {
    this.props.userAction.signupRequest(values);
  }
  /**
   * Check Modal
   * @return {any} values
   */
  checkModal() {
    const {modalName} = this.props.payload.initReducer;
    if (modalName === 'modalAuth') {
      return true;
    } else {
      return false;
    }
  }
  /**
   * sign up success
   * @return {any} values
   */
  checkSignUpSuccess() {
    const {registerSuccess} = this.props.payload.userReducer;
    if (registerSuccess) {
      return (
        <div className="tabContent">
          An email has been sent to you for verification<br/>
          Please check your mailbox and verify your account.<br/>
          <a target="_blank" rel="noopener noreferrer" href="https://www.google.com.vn/search?q=mail" className="btn" style={{marginTop: 15}}>
          Got it
          </a>
        </div>
      );
    } else {
      return (
        <div className="tabContent">
          Alredy have an account.{' '}
          <a onClick={() => this.onChangeTab(1)} href="#">Log in</a>
          <SignUpForm {...this.props} onSubmit={(values)=> this.onSubmitRegister(values)}/>
        </div>
      );
    }
  }
  /**
   * hide Modal
   */
  onHideModal() {
    this.props.initAction.hideModal();
    this.props.userAction.clearError();
  }
  /**
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    return (
      <ReactModal
        isOpen={this.checkModal()}
        onCloseModal={()=> this.onHideModal()}
        onRequestClose={()=> this.onHideModal()}
        contentLabel="login Modal"
      >
        <Tabs selectedIndex={this.state.tabIndex} onSelect={(tabIndex) => this.onChangeTab(tabIndex)}>
          <TabList>
            <Tab>SIGN UP</Tab>
            <Tab>LOGIN</Tab>
          </TabList>
          <TabPanel>
            {this.checkSignUpSuccess()}
          </TabPanel>
          <TabPanel>
            <div className="tabContent">
              No account yet? <a onClick={() => this.onChangeTab(0)} href="#">Sign up</a>
              <LoginForm {...this.props} onSubmit={(values)=> this.onSubmitLogin(values)} />
              <div className="lineModal" />
              <h5>SIGN UP WITH FACEBOOK</h5>
              <FacebookLogin
                appId="1977674025820465"
                fields="name,email,picture"
                callback={this.responseFacebook}
                cssClass="btn btn-fb btn-primary rounded-0"
              />
            </div>
          </TabPanel>
        </Tabs>
      </ReactModal>
    );
  }
}

export default Modal;
