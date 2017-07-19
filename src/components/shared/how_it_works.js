import React from 'react';

import Panel from '../shared/panel';

export default () => {
  return (
    <Panel title="How It Works">
      <ul className="row">
        <li className="col s12 m3 center-align">
          <img src="#" alt="" />
          <p>Enter a form about your musical interest</p>
        </li>
        <li className="col s12 m3 center-align">
          <img src="#" alt="" />
          <p>Use filter options to choose a path that fits you most</p>
        </li>
        <li className="col s12 m3 center-align">
          <img src="#" alt="" />
          <p>Save the videos to a path on your dashboard</p>
        </li>
        <li className="col s12 m3 center-align">
          <img src="#" alt="" />
          <p>Get feedback directly from accredited teachers</p>
        </li>
      </ul>

      <a className="btn" href="#">Discovery Now</a>
    </Panel>
  );
};
