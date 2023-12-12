// Login.js
import React, { useState } from 'react';
import MyTextField from '../components/MyTextField';
import MyButton from '../components/MyButton';
import axios from '../utils/axios'
import { useNavigate } from "react-router-dom";

const Login = (props) => {

  const navigate = useNavigate();

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
    axios.post('/user/login',formData).then(res=>{
      console.log(res.data.data.accessToken,'token')
      localStorage.setItem('isLogIn',true)
      localStorage.setItem('token',res.data.data.accessToken)
      navigate('/')
    })
    console.log('Submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1 className="mb-4">Log In</h1>

            <MyTextField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />

            <MyTextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />

            <MyButton type="submit" text="Log In" className="btn-primary mt-3" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
