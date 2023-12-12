// Login.js
import React, { useState } from 'react';
import LoginTextField from './LoginTextField';
import LoginButton from './LoginButton';

const Login = () => {
  const [formData, setFormData] = useState({
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
    // Add your login logic here
    console.log('Submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4">Log In</h1>

            <LoginTextField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />

            <LoginTextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />

            <LoginButton type="submit" text="Log In" className="btn-primary mt-3" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
