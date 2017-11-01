import React, { Component } from 'react'
import Divider from 'material-ui/Divider'

import Work from '../Components/Work'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="work">
          <Work link="https://www.freebirdrides.com/" imageSrc="works/freebirdrides.png" title="Freebird Rides" description="Go to the hottest bars and restaurants in town that will contribute to your Uber bill." skills={['HapiJs', 'Mongoose', 'CircleCI', 'AWS', 'Lambda', 'SQS', 'SNS', 'Unit Test']}/>
          <Divider />

          <Work link="http://keatingarchitecture.com/" imageSrc="works/keating.png" title="Keating" description="Website with Built-in CMS specifically created for keating's content" skills={['Laravel', 'MySql', 'CMS']}/>
          <Divider />

          <Work link="https://github.com/kdlcruz/kdlcruz" imageSrc="works/kdlcruz.png" title="Kdlcruz Website" description="A public github projects that showcase my CI/CD workflow" skills={['React', 'CircleCI', 'Google Cloud']}/>
          <Divider />

          <Work link="https://github.com/kdlcruz/SuperHeroChallenge" imageSrc="works/superhero.png" title="Super Hero Challenge" description="A public github projects that showcase my Ionic skills and API Integration" skills={['Ionic', 'API Integration', 'Marvel API']}/>
          <Divider />

          <Work link="https://github.com/kdlcruz/bombo" imageSrc="works/github.png" title="Bombo" description="Bombo is an AngularJS service that lets your broadcast messages in between services, controllers and directives." skills={['AngularJs', 'npm', 'Bower']}/>
          <Divider />

          <Work link="https://github.com/kdlcruz/generator-restify-starter" imageSrc="works/github.png" title="Generator Restify Starter" description="A boilerplate setup for building Node.js RESTful API using Restify" skills={['Boilerplate', 'NodeJs', 'API']}/>
          <Divider />

        </div>
      </div>
    )
  }
}

export default Portfolio
