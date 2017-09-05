import React from 'react';
import './button.style.css';
/**
 * Button of project
 */
export default ({children}) => {
  return (
    <div className="button-VMA">
      <a href="#">
        {children}
      </a>
    </div>
  );
};