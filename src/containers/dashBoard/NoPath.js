import React, {Component} from 'react';
import HowItWork from '../../components/shared/how_it_works';

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
          <div className="row">
            <div className="col">
              <div className="card-panel grey lighten-5">
                <h5 className="center-align">You haven't had any path added to your dashboard to your dashboard. Let's fill
                  in a short form to find one (or some) of them quickly!
                </h5>
                <HowItWork />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
