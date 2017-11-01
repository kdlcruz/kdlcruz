import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import PermIdentity from 'material-ui-icons/PermIdentity'
import PermPhoneMsg from 'material-ui-icons/PermPhoneMsg'
import Work from 'material-ui-icons/Work'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Avatar from '../Components/Avatar'
import Button from '../Components/Button'
import FontAwesome from '../Components/FontAwesome'

class Main extends Component {
  render() {
    return (
      <Grid container id="main" style={{ marginTop: '25px' }}>
        <Grid item md={3} style={{ paddingTop: '0px' }}>
          <Avatar src="profile.jpg" borderRadius="15px 15px 0 0"/>
          <div className="mainMenu">
            <Button color="primary" txt="SKILLS" component={Link} to="/" icon={PermIdentity}/>
            <Button color="primary" txt="PORTFOLIO" component={Link} to="/portfolio" icon={Work}/>
            <Button color="primary" txt="CONTACT" component={Link} to="/contact" icon={PermPhoneMsg}/>
          </div>
          <div className="meLinks">
            <label>Tools are used for solved problems.</label>
            <FontAwesome name="stack-overflow" href="https://stackoverflow.com/users/2148468/kdlcruz"/>
            <FontAwesome name="github" href="https://github.com/kdlcruz"/>
          </div>
        </Grid>
        <Grid item md={9} id="module">
          <Switch>
            <Route exact path="/" component={Skills} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Grid>
      </Grid>
    )
  }
}

export default Main
