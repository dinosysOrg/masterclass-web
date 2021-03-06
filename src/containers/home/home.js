import React, {Component} from 'react';
import Carousel from './carousel';
import HowItWorks from '../../components/shared/how_it_works';
import FullVideoCatalog from '../../components/shared/full_video_catalog';
import $ from 'jquery';
import './home.style.css';
import {formatArrayData} from '../../configs/data.config';
import PropTypes from 'prop-types';
let settingSlide = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: false,
}
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
   renderFullVideoCatalog() {
    if(this.props.payload.pathReducer.hasOwnProperty('paths') && this.props.payload.pathReducer.paths.popular.length !== 0) {
      let data = formatArrayData(this.props.payload.pathReducer.paths.popular);
      return (
        <FullVideoCatalog settingSlide={settingSlide} title={this.context.t('popular')} data={data} location={this.props.location}/>
      )
    } else {
      return null;
    }
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
        {this.renderFullVideoCatalog()}
      </div>
    );
  }
}

HomePage.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default HomePage;
