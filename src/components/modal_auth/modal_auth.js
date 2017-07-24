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
    this.state = {},
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  /**
   * Submit Login
   * @param {object} response
   */
  responseFacebook(response) {
    console.log(response);
    this.props.onCloseModal(false);
  }
  /**
   * Submit Login
   * @param {object} values
   */
  onSubmitLogin(values) {
    console.log(values);
  }
  /**
   * Submit Register
   * @param {object} values
   */
  onSubmitRegister(values) {
    console.log(values);
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
    return (
      <ReactModal
        // onAfterOpen={() => this.onOpenModal}
        contentLabel="login Modal"
        {...this.props}
      >
        <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
          <TabList>
            <Tab>SIGN UP</Tab>
            <Tab>LOGIN</Tab>
          </TabList>
          <TabPanel>
            <div className="tabContent">
              Alredy have an account. <a href="#">Log in</a>
              <Form onSubmit={(values) => this.onSubmitRegister(values)}>
                {({submitForm}) => {
                  return (
                    <form onSubmit={submitForm}>
                      <Text field="email" placeholder="Email" />
                      <Text field="password" placeholder="Password" />
                      <Text field="confirmPassword" placeholder="Confirm Password" />
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
              No account yet? <a href="#">Sign up</a>
              <Form
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({submitForm}) => {
                  return (
                    <form onSubmit={submitForm}>
                      <Text field="email" placeholder="Email" />
                      <Text field="password" placeholder="Password" />
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
                autoLoad={true}
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
