import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import _ from 'lodash'
import Divider from 'material-ui/Divider'

import Line from './LineProgress'

const styles = {
  myTools: {
    marginTop: '30px',
    width: '50%',
    float: 'left'
  },
  toolGroups: {
    marginTop: '10px',
    padding: '0 15px'
  }
}

const MyToolsComponent = (props) => {
  const { classes } = props

  const lineEl = []

  _.each(props.data, (el, key) => {
    lineEl.push(<Line txt={el.txt} percent={el.percent} key={key}/>)
  })


  return (
    <div className={classes.myTools}>
      <div className={classes.toolGroups}>
        <b>{props.title}</b>
        <Divider />
        {lineEl}
      </div>
      
    </div>
  )
}

MyToolsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default withStyles(styles)(MyToolsComponent)
