import React from 'react';

const MyTextField = ({ label, type, placeholder, name, onChange }) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <input
      type={type}
      className="form-control"
      id={name}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  </div>
);

export default MyTextField;
