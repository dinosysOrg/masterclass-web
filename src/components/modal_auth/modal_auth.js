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
    // console.log(response);
    this.props.onCloseModal(false);
  }
  /**
   * Submit Login
   * @param {object} values
   */
  onSubmitLogin(values) {
    this.props.onCloseModal(false);
    this.props.userAction.loginRequest(values);
  }
  /**
   * Submit Register
   * @param {object} values
   */
  onSubmitRegister(values) {
    console.log(values);
  }
  /**
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    // console.log(this.props);
    return (
      <ReactModal
        contentLabel="login Modal"
        {...this.props}
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
                validate={(values) => {
                  return {
                    email: !values.email ? 'Email is required' : undefined,
                    password: !values.password ? 'Password required' : undefined,
                    confirmPassword: !values.confirmPassword ? 'Password is required' : undefined,
                  };
                }}
              >
                {({submitForm}) => {
                  return (
                    <form onSubmit={submitForm}>
                      <Text required field="email" placeholder="Email" />
                      <Text required field="password" placeholder="Password" />
                      <Text required field="confirmPassword" placeholder="Confirm Password" />
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
                      <Text required field="email" placeholder="Email" />
                      <Text required field="password" placeholder="Password" />
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
