// @flow
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';

import { Home } from './pages/home'
import { Agenda } from './pages/agenda'
import { Schedule } from './pages/schedule'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './app.redux'

const existingState = localStorage.getItem('redux-state')

const store = createStore(
  appReducer,
  existingState ? JSON.parse(existingState) : undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  localStorage.setItem('redux-state', JSON.stringify(store.getState()))
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path='/' component={Home} />
            <Route path='/agenda' component={Agenda} />
            <Route path='/schedule' component={Schedule} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
