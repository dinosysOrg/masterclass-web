import React from 'react';

export default (props) => {
  const {done, total, description} = props;

  return (
    <div>
      <p>
        {Math.round(done/total*100)} %
      </p>
      <p>
        {done}/{total} {description}
      </p>
    </div>
  );
};
