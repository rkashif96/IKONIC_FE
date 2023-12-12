// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';

const RouterOutlet = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
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
