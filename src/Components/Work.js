import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Chip from 'material-ui/Chip'
import _ from 'lodash'

const styles = {
  image: {
    width: '100%'
  },
  workInfo: {},
  grid: {
    margin: '20px 0px'
  },
  hyperlink: {
    textDecoration: 'none',
    color: '#000',
    marginBottom: '10px',
    display: 'block'
  },
  chip: {
    height: '25px',
    float: 'left'
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const WorkComponent = (props) => {
  const { classes } = props
  const chips = []
  _.each(props.skills, (skill, key) => {
    chips.push(<Chip label={skill} className={classes.chip} key={key} />)
  })
  return (
    <Grid container spacing={24} className={classes.grid}>
      <Grid item md={6}>
        <a href={props.link} className={classes.hyperlink} target="_blank">
          <img src={props.imageSrc} className={classes.image} alt={props.title}/>
        </a>
      </Grid>
      <Grid item md={6}>
        <div className={classes.workInfo}>
          <a href={props.link} className={classes.hyperlink} target="_blank">
            <b>{props.title}</b>
          </a>
          <div className={classes.chipContainer}>
            {chips}
          </div>
          <br />
          <label>
            {props.description}
          </label>
        </div>
      </Grid>
    </Grid>
  )
}

WorkComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  skills: PropTypes.array.isRequired
}

export default withStyles(styles)(WorkComponent)
