// Button.js
import React from 'react';

const CustomButton = ({ type, text, className }) => (
  <button type={type} className={`btn ${className}`}>
    {text}
  </button>
);

export default CustomButton;
