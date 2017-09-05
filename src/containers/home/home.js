import React, {Component} from 'react';
import Carousel from './carousel';
import HowItWorks from '../../components/shared/how_it_works';
import FullVideoCatalog from '../../components/shared/full_video_catalog';
import './home.style.css';

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
        <Carousel/>
        <div className="container">
          <HowItWorks />
          <FullVideoCatalog />
        </div>
      </div>
    );
  }
}

export default HomePage;
