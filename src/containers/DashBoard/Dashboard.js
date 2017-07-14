import React, {Component} from 'react';
import {Row, Col, Section} from 'react-materialize';
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
        <div id="body">
          <Row className="dashboard-row">
            <Col className="sidebar-column" s={12} m={2}>
              <Sidebar/>
            </Col>
            <Col className="dashboard-content" s={12} m={10}>
              <Section>
                <h3><i className="mdi-content-send brown-text"></i></h3>
                <h4>Dashboard Page</h4>
                <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque
                  id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut
                  ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque,
                  posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis
                  nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida
                  ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque
                  id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut
                  ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque,
                  posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis
                  nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida
                  ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia Curae;</p>
              </Section>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;

