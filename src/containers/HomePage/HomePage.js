import React, {Component} from 'react';
import {Slider, Slide, Container, Col, Row, Section} from 'react-materialize';
/**
 * HomePage of project
 */
class HomePage extends Component {
  /**
   * render HomePage template 
   * @return {html} The template of HomePage class
   */
  render() {
    return (
      <div className="home-page">
        <div id="body">
          <Slider>
            <Slide
              src="https://www.w3schools.com/bootstrap/chicago.jpg"
              title="This is our big Tagline!"
            >
              Here's our small slogan.
            </Slide>
            <Slide
              src="https://www.w3schools.com/bootstrap/la.jpg"
              title="Left aligned Caption"
              placement="left"
            >
              Here's our small slogan.
            </Slide>
            <Slide
              src="https://www.w3schools.com/bootstrap/ny.jpg"
              title="Right aligned Caption"
              placement="right"
            >
              Here's our small slogan.
            </Slide>
          </Slider>
          <Container>
            <Section>
              <Row>
                <Col s={12} className="center">
                  <h3>
                    <i className="mdi-content-send brown-text" />
                  </h3>
                  <h4>Home Page</h4>
                  <p className="left-align light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam scelerisque id nunc nec volutpat. Etiam pellentesque
                    tristique arcu, non consequat magna fermentum ac. Cras ut
                    ultricies eros. Maecenas eros justo, ullamcorper a sapien
                    id, viverra ultrices eros. Morbi sem neque, posuere et
                    pretium eget, bibendum sollicitudin lacus. Aliquam eleifend
                    sollicitudin diam, eu mattis nisl maximus sed. Nulla
                    imperdiet semper molestie. Morbi massa odio, condimentum sed
                    ipsum ac, gravida ultrices erat. Nullam eget dignissim
                    mauris, non tristique erat. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                  </p>
                  <p className="left-align light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam scelerisque id nunc nec volutpat. Etiam pellentesque
                    tristique arcu, non consequat magna fermentum ac. Cras ut
                    ultricies eros. Maecenas eros justo, ullamcorper a sapien
                    id, viverra ultrices eros. Morbi sem neque, posuere et
                    pretium eget, bibendum sollicitudin lacus. Aliquam eleifend
                    sollicitudin diam, eu mattis nisl maximus sed. Nulla
                    imperdiet semper molestie. Morbi massa odio, condimentum sed
                    ipsum ac, gravida ultrices erat. Nullam eget dignissim
                    mauris, non tristique erat. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia Curae;
                  </p>
                </Col>
              </Row>
            </Section>
          </Container>
          <Container>
            <Row>
              <Col m={4}>
                <div className="center promo promo-example">
                  <i className="large material-icons">flash_on</i>
                  <p className="promo-caption">Speeds up development</p>
                  <p className="light center">
                    We did most of the heavy lifting for you to provide a
                    default stylings that incorporate our custom components.
                  </p>
                </div>
              </Col>
              <Col m={4}>
                <div className="center promo promo-example">
                  <i className="large material-icons">group</i>
                  <p className="promo-caption">User Experience Focused</p>
                  <p className="light center">
                    By utilizing elements and principles of Material Design, we
                    were able to create a framework that focuses on User
                    Experience.
                  </p>
                </div>
              </Col>
              <Col m={4}>
                <div className="center promo promo-example">
                  <i className="large material-icons">settings</i>
                  <p className="promo-caption">Easy to work with</p>
                  <p className="light center">
                    We have provided detailed documentation as well as specific
                    code examples to help new users get started.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default HomePage;
