import React from 'react';

import VideoPanel from '../../components/shared/video_panel';
import PromoPanel from '../../components/shared/promo_panel';

export default (props) => {
  return (
    <div className="path-page">
      <div className="container">
        <div className="row">
          <div className="col s12 m10">
            <h4>Strumming | Beginner Guitar | Mr. Jonny</h4>

            <img src="http://via.placeholder.com/944x530?text=>" alt="video thumbnail" />

            <h5>Path Description</h5>

            <p>
              Officia esse mollit fugiat fugiat. Nisi ipsum dolor do eu. Reprehenderit laboris ea in sint. Exercitation minim sint est exercitation
              eiusmod exercitation cupidatat quis incididunt consequat sit quis nisi. Occaecat incididunt in labore qui qui aute quis officia commodo
              excepteur esse ullamco voluptate ullamco.
            </p>

            <h5>Overview</h5>

            <ul className="row">
              <li className="col s12 m4">
                <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />
                <p>Video Lesson 1</p>
              </li>
              <li className="col s12 m4">
                <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />
                <p>Video Lesson 1</p>
              </li>
              <li className="col s12 m4">
                <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />
                <p>Video Lesson 1</p>
              </li>
            </ul>

            <a href="#">View all videos</a>

            <h5>Teacher</h5>

            <img src="http://via.placeholder.com/150?text=teacher" alt="teacher avatar" />
            <h6>Teacher Biography</h6>
            <p>
              Voluptate est pariatur labore anim labore eiusmod velit ullamco incididunt adipisicing ut proident nulla. Reprehenderit officia non
              incididunt ullamco labore ullamco est in elit. Sit aute enim ex quis ea irure amet dolor.
            </p>
            <a href="#">View all teachers</a>

            <VideoPanel title="Related Paths" />

            <PromoPanel />
          </div>
          <div className="col s12 m2">
            <PromoPanel />
          </div>
        </div>
      </div>"
    </div>
  );
};
