import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Form, Text} from 'react-form';
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
  }
  /**
   * onSubmit Fuc
   * @param {object} evt
   */
  onSubmit(evt) {
    evt.preventDefault();
    const value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
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
        <Tabs>
          <TabList>
            <Tab>SIGN UP</Tab>
            <Tab>LOGIN</Tab>
          </TabList>
          <TabPanel>
            Alredy have an account. <a href="#">Log in</a>
            <Form
              onSubmit={(values) => {
                console.log('Success!', values);
              }}
              validate={({name}) => {
                return {
                  name: !name ? 'A name is required' : undefined,
                };
              }}
            >
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
          </TabPanel>
          <TabPanel>asdasdsad231124</TabPanel>
        </Tabs>
      </ReactModal>
    );
  }
}

export default Modal;
