import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import FacebookLogin from 'react-facebook-login';
import SignUpForm from './signup_form';
import LoginForm from './login_form';
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
      tabIndex: 0,
    },
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  /**
   * changeTab Object
   * @param {number} tabIndex
   */
  onChangeTab(tabIndex) {
    this.setState({
      tabIndex,
    });
  }
  /**
   * Submit Login
   * @param {object} response
   */
  responseFacebook(response) {
    console.log(response);
    alert('Đăng nhập FB thanh cong');
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
          Please check your mailbox and verify your account.
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
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    const {hideModal} = this.props.initAction;
    return (
      <ReactModal
        isOpen={this.checkModal()}
        onCloseModal={()=> hideModal()}
        onRequestClose={()=> hideModal()}
        contentLabel="login Modal"
      >
        <Tabs selectedIndex={this.state.tabIndex} onSelect={(tabIndex) => this.setState({tabIndex})}>
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
                cssClass="btn waves-effect waves-light btn-fb"
              />
            </div>
          </TabPanel>
        </Tabs>
      </ReactModal>
    );
  }
}

export default Modal;
