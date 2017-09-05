import React, {Component} from 'react';
import './sidebar.style.css';
/**
 * Siderbar of project
 */
class Siderbar extends Component {
  /**
   * render QuizLoading template
   * @return {html} The template of menu class
  */
  checkSidebar() {
    const {pathname} = this.props.location;
    if (pathname === '/Profile') {
      return (
        <div className="sidebar">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item"><a href="">General Information</a></li>
            <li className="nav-item"><a href="">Settings</a></li>
          </ul>
        </div>
      );
    }
    if (pathname === '/Dashboard') {
      return (
        <div className="sidebar">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item"><a href="">Overview</a></li>
            <li className="nav-item"><a href="">Syllabus</a></li>
            <li className="nav-item"><a href="">Assignment</a></li>
            <li className="nav-item"><a href="">Pratice</a></li>
            <li className="nav-item"><a href="">Tuner</a></li>
            <li className="nav-item"><a href="">Q&A</a></li>
          </ul>
        </div>
      );
    }
  }
  /**
   * render Siderbar template
   * @return {html} The template of menu class
   */
  render() {
    return (
      this.checkSidebar()
    );
  }
}

export default Siderbar;
