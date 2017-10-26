import React, { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">KDLCRUZ Portfolio</h1>
        </header>
        <p className="App-intro">
          Good things are coming here, check back soon!
        </p>
        <br />
        <p>
          This should be on staging
        </p>
      </div>
    )
  }
}

export default App
