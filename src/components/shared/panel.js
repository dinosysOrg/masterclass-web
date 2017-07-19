import React from 'react';

export default ({title, children}) => {
  return (
    <div>
      <h4>
        {title}
      </h4>
      {children}
    </div>
  );
};
