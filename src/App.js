import React, { useEffect } from 'react';
import axios from './utils/axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
const RouterOutlet = () => {
  // useEffect(()=>{
  //   axios.get('/post').then(res=>{
  //     console.log(res,'res')
  //   }).catch(err=>{
  //     console.log(err)
  //     if (err.response.data.message.includes('Login')){
  //       setIsLogin(false)
  //     }
  //   })
  // })
  // const [isLogin, setIsLogin]= React.useState(true)
  const [isLogin, setIsLogin]= React.useState(true)

  return (
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-3">
          <RouterOutlet />
        </div>
      </div>
    </Router>
  );
}

export default App;
