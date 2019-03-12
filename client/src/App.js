import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { ProtectedRoute } from "./components/ProtectedRoute";

import Login from './components/Login';
import Home from './components/Home';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
