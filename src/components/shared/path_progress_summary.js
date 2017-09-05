import React from 'react';

import Panel from './panel';
import DoneCount from './done_count';

export default () => {
  return (
    <Panel title="STRUMMING | BEGINNER GUITAR | MR.JONNY">
      <img src="http://via.placeholder.com/918x358?text=^*^" alt="Path's banner" />
      <ul>
        <li>
          <h4>7.5</h4>
          <p>Hours of Practice</p>
        </li>
        <li>
          <h4>2</h4>
          <p>Awards Earned</p>
          <ul>
            <li>
              <img alt="" src="#" /> 5 hours of pracice
            </li>
            <li>
              <img alt="" src="#" /> All lesson video completed
            </li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <DoneCount done={3} total={4} description="Lessons Completed" />
        </li>
        <li>
          <DoneCount done={1} total={3} description="Sheets Downloaded" />
        </li>
        <li>
          <DoneCount done={2} total={8} description="Excercises Submitted" />
        </li>
      </ul>

      <p>
        *Use the color filters to see your completion progress
      </p>
    </Panel>
  );
};
