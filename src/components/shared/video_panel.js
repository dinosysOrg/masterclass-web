import React from 'react';

import Panel from './panel';

export default ({title}) => {
  return (
    <Panel title={title}>
      <ul className="row">
        <li className="col s4">
          <div>
            <img src="#" alt="video thumbnail" />
            <p>Strumming</p>
            <p>Intermediate Guitar</p>
            <p>MR. JONNY</p>
          </div>
        </li>

        <li className="col s4">
          <div>
            <img src="#" alt="video thumbnail" />
            <p>Strumming</p>
            <p>Intermediate Guitar</p>
            <p>MR. JONNY</p>
          </div>
        </li>

        <li className="col s4">
          <div>
            <img src="#" alt="video thumbnail" />
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
