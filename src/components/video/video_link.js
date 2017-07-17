import React from 'react';

export default ({href, imgSrc, text}) => {
  return (
    <a href={href}>
      <img src={imgSrc} />
      <p>{text}</p>
    </a>
  );
};
