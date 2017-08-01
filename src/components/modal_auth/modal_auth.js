import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Form, Text} from 'react-form';
import FacebookLogin from 'react-facebook-login';
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
   * login error
   * @return {any} values
   */
  loginError() {
    const {signUpError} = this.props.payload.userReducer;
    return signUpError.map((data, i) =>
      <li style={{color: 'red'}} key={i}>- {data}</li>
    );
  }
  /**
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    const {loginError, signUpError} = this.props.payload.userReducer;
    console.log(signUpError);
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
            <div className="tabContent">
              Alredy have an account.{' '}
              <a onClick={() => this.onChangeTab(1)} href="#">
                Log in
              </a>
              <Form
                onSubmit={(values) => this.onSubmitRegister(values)}
              >
                {({submitForm}) => {
                  return (
                    <form onSubmit={submitForm}>
                      <Text type="text" required field="email" placeholder="Email" />
                      <Text type="text" required field="password" placeholder="Password" />
                      <Text type="text" required field="password_confirmation" placeholder="Confirm Password" />
                      {signUpError ? <ul>{this.loginError()}</ul> : null}
                      <button className="btn waves-effect waves-light" type="submit" name="action">
                        Create Account
                      </button>
                    </form>
                  );
                }}
              </Form>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="tabContent">
              No account yet? <a onClick={() => this.onChangeTab(0)} href="#">Sign up</a>
              <Form
                onSubmit={(values) => this.onSubmitLogin(values)}
              >
                {({submitForm}) => {
                  return (
                    <form onSubmit={submitForm}>
                      <Text type="text" required field="email" placeholder="Email" />
                      <Text required field="password" placeholder="Password" />
                      {signUpError ? <div style={{marginBottom: 10, color: 'red'}}>{loginError}</div> : null}
                      <button className="btn waves-effect waves-light" type="submit" name="action">
                        Login
                      </button>
                    </form>
                  );
                }}
              </Form>
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
