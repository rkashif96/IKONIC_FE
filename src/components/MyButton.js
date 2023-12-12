// Button.js
import React from 'react';

const MyButton = ({ type, text, className }) => (
  <button type={type} className={`btn ${className}`}>
    {text}
  </button>
);

export default MyButton;
