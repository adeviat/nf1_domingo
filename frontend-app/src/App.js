import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Login from './Component/Login'
import Register from './Component/Register'
import Profile from './Component/Profile'
import RegisterCart from "./RegisterCart.js";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/user/register" component={RegisterCart} />
              <Route exact path="/user/login" component={Login} />
              <Route exact path="/user/profile" component={Profile} />
            </div>
          </div>
        </Router>
    )
  }
}

export default App