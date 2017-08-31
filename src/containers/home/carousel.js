import React from 'react';

const Carousel = (props) => (
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active" />
      <li data-target="#myCarousel" data-slide-to="1" />
      <li data-target="#myCarousel" data-slide-to="2" />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          className="first-slide"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt="First slide"
        />
        <div className="container">
          <div className="carousel-caption d-none d-md-block text-left">
            <h1>Example headline.</h1>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit non mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
            <p>
              <a className="btn btn-lg btn-primary" href="#" role="button">
                Sign up today
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img
          className="second-slide"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt="Second slide"
        />
        <div className="container">
          <div className="carousel-caption d-none d-md-block">
            <h1>Another example headline.</h1>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit non mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
            <p>
              <a className="btn btn-lg btn-primary" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img
          className="third-slide"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt="Third slide"
        />
        <div className="container">
          <div className="carousel-caption d-none d-md-block text-right">
            <h1>One more for good measure.</h1>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit non mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
            <p>
              <a className="btn btn-lg btn-primary" href="#" role="button">
                Browse gallery
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#myCarousel"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#myCarousel"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);
export default Carousel;
