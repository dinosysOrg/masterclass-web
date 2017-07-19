import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import VideoPanel from '../../components/shared/video_panel';
import PathProgressSummary from '../../components/shared/path_progress_summary';
import ProgressList from '../../components/shared/progress_list';

/**
 * Dashboard of project
 */
class Dashboard extends Component {
  /**
   * render Dashboard template
   * @return {html} The template of Dashboard class
   */
  render() {
    return (
      <div className="dashboard-page">
        <div className="container">
          <Link to="Dashboard">My Dashboard</Link>
          <form>
            <input type="text" placeholder="search" />
          </form>
          <p>*Hover on each path to see how far it takes you on your musical journey</p>

          <VideoPanel title="In Progress" />
          <VideoPanel title="Saved" />
          <VideoPanel title="Completed" />
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
