import React, {Component} from 'react';
import {Sidebar} from '../../components/';
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
        <div className="row dashboard-row">
          <div className="col s12 m2 sidebar-column">
            <Sidebar />
          </div>
          <div className="col s12 m10 dashboard-content">
            <section>
              <h3>
                <i className="mdi-content-send brown-text" />
              </h3>
              <h4>Dashboard Page</h4>
              <p className="left-align light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam
                pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros
                justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget,
                bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla
                imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam
                eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae;
              </p>
              <p className="left-align light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam
                pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros
                justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget,
                bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla
                imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam
                eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia Curae;
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
