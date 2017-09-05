import React from 'react';

export default ({href, imgSrc, text}) => {
  return (
    <a href={href}>
      <img alt="" src={imgSrc} />
      <p>{text}</p>
    </a>
  );
};
