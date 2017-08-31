import React from 'react';

import Panel from './panel';

export default ({title, videoList}) => {
  return (
    <Panel title={title}>
      <ul className="row">
        {videoList.map((object, index) =>
          <li key={index} className="col s4">
            <div>
              <img src="http://via.placeholder.com/300x150?text=>" alt="video thumbnail" />
              <p>{object.name}</p>
              <p>{object.level.name} {object.instrument.name}</p>
              <p>{object.teacher.name === null ? 'Default' : object.teacher.name}</p>
            </div>
          </li>
        )}
      </ul>
    </Panel>
  );
};
