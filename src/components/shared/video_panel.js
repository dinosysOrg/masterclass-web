import React from 'react';

import Panel from './panel';

export default ({title}) => {
  return (
    <Panel title={title}>
      <ul className="row">
        <li className="col">
          <div>
            <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />
            <p>Strumming</p>
            <p>Intermediate Guitar</p>
            <p>MR. JONNY</p>
          </div>
        </li>

        <li className="col">
          <div>
            <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />
            <p>Strumming</p>
            <p>Intermediate Guitar</p>
            <p>MR. JONNY</p>
          </div>
        </li>

        <li className="col">
          <div>
            <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />
            <p>Strumming</p>
            <p>Intermediate Guitar</p>
            <p>MR. JONNY</p>
          </div>
        </li>
      </ul>

      <a href="#">View all paths</a>
    </Panel>
  );
};
