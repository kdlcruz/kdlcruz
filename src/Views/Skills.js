import React, { Component } from 'react'
import Grid from 'material-ui/Grid'


import MyTools from '../Components/MyTools'
import jsSkills from '../Data/js-skills'
import phpSkills from '../Data/php-skills'
import dbSkills from '../Data/db-skills'
import cacheSkills from '../Data/cache-skills'
import paymentSkills from '../Data/payment-skills'
import cssSkills from '../Data/css-skills'
import microSkills from '../Data/micro-skills'
import localSkills from '../Data/local-skills'
import osSkills from '../Data/os-skills'
import ciSkills from '../Data/ci-cd-skills'
import testSkills from '../Data/test-skills'


class About extends Component {
  render() {

    return (
      <div className="skills-content">
        <h1>Kevin Jay Dela Cruz</h1>
        <h2>Software Ninja</h2>

        <br />
        <br />
        <b>My tools</b>

        <Grid container spacing={24}>
          <Grid item md={12}>
            <MyTools title="Javascript" data={jsSkills}/>
            <MyTools title="PHP" data={phpSkills}/>
          </Grid>
          <Grid item md={12}>
            <MyTools title="Database" data={dbSkills}/>
            <MyTools title="Styling" data={cssSkills}/>
          </Grid>
          <Grid item md={12}>
            <MyTools title="Payment Processors" data={paymentSkills}/>
            <MyTools title="Caching" data={cacheSkills}/>
          </Grid>
          <Grid item md={12}>
            <MyTools title="CI/CD" data={ciSkills}/>
            <MyTools title="Microservices" data={microSkills}/>
            
          </Grid>
          <Grid item md={12}>
            <MyTools title="Testing Libraries" data={testSkills}/>
            <MyTools title="Local Developement" data={localSkills}/>
          </Grid>
          <Grid item md={12}>
            <MyTools title="OS preference" data={osSkills}/>
          </Grid>
        </Grid>
        
      </div>
    )
  }
}

export default About
