import React, {Component} from 'react';
import ReactModal from 'react-modal';
/**
 * Modal of project
 */
class Modal extends Component {
  /**
 * render Footer
 * @return {html} The template of Footer class
 */
  render() {
    return (
      <ReactModal {...this.props}>
        {this.props.children}
      </ReactModal>
    );
  }
}

export default Modal;
