// Signup.js
import React, { useState } from 'react';
import CustomTextField from './TextField';
import CustomButton from './Button';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4">Sign Up</h1>

            <CustomTextField
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={handleChange}
            />

            <CustomTextField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />

            <CustomTextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />

            <CustomButton type="submit" text="Sign Up" className="btn-primary mt-3" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
