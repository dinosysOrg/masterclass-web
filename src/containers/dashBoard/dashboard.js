import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import VideoPanel from '../../components/shared/video_panel';
import PathProgressSummary from '../../components/shared/path_progress_summary';
import ProgressList from '../../components/shared/progress_list';
import './dashboard.style.css';

/**
 * Dashboard of project
 */
class Dashboard extends Component {
  /**
   * render Dashboard template
   * @return {html} The template of Dashboard class
   */
  render() {
    let myPath = this.props.payload.userReducer.myPath;
    return (
      <div className="dashboard-page">
        <div className="container">
          <Link to="Dashboard">My Dashboard</Link>
          <form>
            <input type="text" placeholder="search" />
          </form>
          <p>*Hover on each path to see how far it takes you on your musical journey</p>
          {myPath.recommended.length !== 0 ? <VideoPanel title="Recommended" videoList={myPath.recommended} /> : null}
          {myPath.in_progress.length !== 0 ? <VideoPanel title="In Progress" videoList={myPath.in_progress} /> : null}
          {myPath.completed.length !== 0 ? <VideoPanel title="Completed" videoList={myPath.completed} /> : null}
          {myPath.saved.length !== 0 ? <VideoPanel title="Saved" videoList={myPath.Saved} /> : null}
          <PathProgressSummary />

          <ul>
            <li>
              <ProgressList title="Trinity" />
              <ProgressList title="Strumming" />
              <ProgressList title="Chords" />
              <ProgressList title="Finger Style" />
            </li>
          </ul>

          <a className="btn" href="#">Resume This Path</a>
        </div>
      </div>
    );
  }
}

export default Dashboard;
