import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
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
      showModal: false,
    };
    this.onOpenModal = this.onOpenModal.bind(this);
  }
  /**
   * onOpenModal Fuc
   */
  onOpenModal() {
  }
  /**
   * render Footer
   * @return {html} The template of Footer class
   */
  render() {
    return (
      <ReactModal
        onAfterOpen={() => this.onOpenModal}
        contentLabel="login Modal" {...this.props}>
        <Tabs>
          <TabList>
            <Tab>SIGN UP</Tab>
            <Tab>LOGIN</Tab>
          </TabList>
          <TabPanel>
            Alredy have an account. <a href="#">Log in</a>
          </TabPanel>
          <TabPanel>
            asdasdsad231124
          </TabPanel>
        </Tabs>

      </ReactModal>
    );
  }
}

export default Modal;
