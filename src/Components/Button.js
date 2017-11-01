import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

const styles = {
  defaultSize: {
    width: '100%',
    backgroundColor: '#33383E',
    padding: '8px 30px',
    display: 'block'
  },
  label: {
    float: 'right',
    display: 'block'
  },
  icon: {
    float: 'left',
    display: 'block'
  }
}

const ButtonComponent = (props) => {
  const { classes } = props
  const Icon = props.icon
  return (
    <Button
      raised
      color={props.color}
      txt={props.txt}
      component={props.component}
      to={props.to}
      className={classes.defaultSize}
    >
      <Icon className={classes.icon} />
      <label className={classes.label}>{props.txt}</label>
    </Button>
  )
}

ButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  txt: PropTypes.string.isRequired,
  color: PropTypes.string,
  component: PropTypes.func,
  to: PropTypes.string,
  icon: PropTypes.func.isRequired
}

export default withStyles(styles)(ButtonComponent)
