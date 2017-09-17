import React, {Component} from 'react';
import './sidebar.style.css';
import {Link} from 'react-router';
/**
 * Siderbar of project
 */
class Siderbar extends Component {
  /**
   * render QuizLoading template
   * @return {html} The template of menu class
  */
  checkSidebar() {
    const path = this.props.location.pathname;
    const {path_Id} = this.props.params;
    if (path === '/Profile') {
      return (
        <div className="sidebar">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item"><a href="">General Information</a></li>
            <li className="nav-item"><a href="">Settings</a></li>
          </ul>
        </div>
      );
    }
    if (path.includes('Path') === true) {
      return (
        <div className="sidebar">
          <ul className="nav nav-pills flex-column">
            <li className={`nav-item ${path === '/Path/:path_Id/' ? 'active' : null}`}><Link to={`/Path/${path_Id}`}>OVERVIEW</Link></li>
            <li className={`nav-item ${path === '/Path/:path_Id/Syllabus' ? 'active' : null}`}><Link to={`/Path/${path_Id}/Syllabus`}>SYLLABUS</Link></li>
            <li className="nav-item"><a href="">MATERIALS</a></li>
            <li className="nav-item"><a href="">PRATIVE</a></li>
            <li className="nav-item"><a href="">TUNNER</a></li>
          </ul>
        </div>
      );
    }
    if (path === '/Dashboard') {
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
    } else return null
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
