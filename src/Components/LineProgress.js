import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Line } from 'rc-progress'

const styles = {
  label: {
    lineHeight: '30px'
  }
}

const LineComponent = (props) => {
  const { classes } = props
  const high = 85
  const low = 50

  let strokeColor = '#32383E'
  if (parseInt(props.percent, 10) > high) {
    strokeColor = '#009C75'
  } else if (parseInt(props.percent, 10) < low) {
    strokeColor = '#D35154'
  }

  return (
    <div>
      <label className={classes.label}>{props.txt}</label>
      <Line percent={props.percent} strokeWidth="2" trailWidth="2" strokeColor={strokeColor}/>
    </div>
	)
}

LineComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  percent: PropTypes.string.isRequired,
  txt: PropTypes.string
}

export default withStyles(styles)(LineComponent)
