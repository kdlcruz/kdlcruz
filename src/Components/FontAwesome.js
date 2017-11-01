import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import FontAwesome from 'react-fontawesome'

const styles = {
  anchor: {
    color: '#33383E',
    display: 'inline-block',
    margin: '0px 5px'
  },
  fontAwesome: {
    borderRadius: '50%',
    border: '2px solid',
    display: 'block',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    padding: '5px'
  }
}

const FontAwesomeComponent = (props) => {
  const { classes } = props
  if (props.href) {
    return (
      <a href={props.href} className={classes.anchor} target="_blank">
        <FontAwesome name={props.name} className={classes.fontAwesome} />
      </a>
    )
  } else {
    return <FontAwesome name={props.name} className={classes.fontAwesome} />
  }
}

FontAwesomeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string
}

export default withStyles(styles)(FontAwesomeComponent)
