import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Line } from 'rc-progress'

const styles = {
  label: {
    lineHeight: '30px'
  }
}

const AvatarComponent = (props) => {
  const { classes } = props
  const high = 85
  const low = 50

  let strokeColor = '#32383E'
  if (parseInt(props.percent) > high) {
    strokeColor = '#009C75'
  } else if (parseInt(props.percent) < low) {
    strokeColor = '#D35154'
  }

  return (
    <div>
      <label className={classes.label}>{props.txt}</label>
      <Line percent={props.percent} strokeWidth="2" trailWidth="2" strokeColor={strokeColor}/>
    </div>
	)
}

AvatarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  percent: PropTypes.string.isRequired,
  txt: PropTypes.string
}

export default withStyles(styles)(AvatarComponent)
