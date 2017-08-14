import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';

import { Home } from './pages/home'
import { Agenda } from './pages/agenda'
import { Schedule } from './pages/schedule'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' component={Home} />
          <Route path='/agenda' component={Agenda} />
          <Route path='/schedule' component={Schedule} />
        </div>
      </Router>
    )
  }
}

export default App;
