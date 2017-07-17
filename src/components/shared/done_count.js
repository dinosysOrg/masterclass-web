import React from 'react';

export default (props) => {
  const {scoreText, description} = props;

  return (
    <div>
      <h3>
        {scoreText}
      </h3>
      <p>
        {description}
      </p>
    </div>
  );
};
