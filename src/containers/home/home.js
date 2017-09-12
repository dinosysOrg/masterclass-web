import React, {Component} from 'react';
import Carousel from './carousel';
import HowItWorks from '../../components/shared/how_it_works';
import FullVideoCatalog from '../../components/shared/full_video_catalog';
import $ from 'jquery';
import './home.style.css';

/**
 * HomePage of project
 */
class HomePage extends Component {
  /**
   * render componentDidMount template
   */
  componentDidMount() {
    $('.carousel-item').each(function() {
      let bgIMG = $(this).attr('data-img');
      $(this).attr('style', 'background-image: url('+bgIMG+')');
    });
  }
  /**
   * render HomePage template
   * @return {html} The template of HomePage class
   */
  render() {
    return (
      <div className="home-page">
        <Carousel/>
        <HowItWorks />
        <FullVideoCatalog {...this.props}/>
      </div>
    );
  }
}

export default HomePage;
