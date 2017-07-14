import React from 'react';

import Panel from './panel';
import DoneCount from './done_count';

export default () => {
  return (
    <Panel title="STRUMMING | BEGINNER GUITAR | MR.JONNY">
      <img src="http://via.placeholder.com/918x358?text=^*^" alt="Path's banner" />
      <ul>
        <li>
          <DoneCount scoreText="3/10" description="Lessons Completed" />
        </li>
        <li>
          <DoneCount scoreText="7/10" description="Sheets Downloaded" />
        </li>
        <li>
          <DoneCount scoreText="1/3" description="Excercises Submitted" />
        </li>
      </ul>

      <ul>
        <li>
          <ul>
            <li>
              <DoneCount scoreText="2" description="Awards Earned" />
            </li>
            <li>
              <ul>
                <li>All Lesson Videos Completed</li>
                <li>5 Hours of Practice</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <DoneCount scoreText="7.5" description="Hours of Practice" />
        </li>
      </ul>
    </Panel>
  );
};
