import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import './Styles/App.css'
import Main from './Views/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <Grid container spacing={24}>
          <Hidden smDown>
            <Grid item md={1}/>
            <Grid item md={10}><Main/></Grid>
            <Grid item md={1}/>
          </Hidden>
        </Grid>
      </Router>
    )
  }
}

export default App
