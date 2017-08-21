import React from 'react';

import Panel from './panel';

export default ({title, videoList}) => {
  return (
    <Panel title={title}>
      <ul className="row">
        {videoList.map((video, index) =>
          <li key={index} className="col s4">
            <div>
              <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />
              <p>Strumming</p>
              <p>Intermediate Guitar</p>
              <p>MR. JONNY</p>
            </div>
          </li>
        )}
      </ul>
    </Panel>
  );
};
