import React from 'react';
import Icon from '../../components/shared/icon';
const Carousel = (props) => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active" data-img="https://zyzixun.net/data/out/1/2746089-acoustic-guitar-wallpapers.jpg">
        <div className="carousel-caption d-none d-md-block text-left ab-middle">
          <p>
            DISCOVER YOUR OWN <br/>
            PERSONAL MUSIC PATH BY<br/>
            FILLING OUT A QUICK FORM.
          </p>
          <p className="mb-0">
            <a className="btn btn-lg btn-primary text-uppercase" href="" role="button">
              Browse gallery
            </a>
          </p>
        </div>
      </div>
      <div className="carousel-item" data-img="https://livewallpaper.info/wp-content/uploads/2017/02/guitar-wallpaper-High-Resolution-Download1.jpg">
        <div className="carousel-caption d-none d-md-block text-left ab-middle">
          <p>
            DISCOVER YOUR OWN <br/>
            PERSONAL MUSIC PATH BY<br/>
          </p>
          <p className="mb-0">
            <a className="btn btn-lg btn-primary text-uppercase" href="" role="button">
              Browse instrument
            </a>
          </p>
        </div>
      </div>
      <div className="carousel-item" data-img="https://allwallpapers.info/wp-content/uploads/2016/05/8081-playing-the-guitar-1920x1080-music-wallpaper.jpeg">
        <div className="carousel-caption d-none d-md-block text-left ab-middle">
          <p>
            DISCOVER YOUR OWN
          </p>
          <p className="mb-0">
            <a className="btn btn-lg btn-primary text-uppercase" href="" role="button">
              Browse music
            </a>
          </p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true">
        <Icon name="left" size={45}/>
      </span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
      <span className="carousel-control-next-icon" aria-hidden="true">
        <Icon name="right" size={45}/>
      </span>
      <span className="sr-only right">Next</span>
    </a>
  </div>
);
export default Carousel;
