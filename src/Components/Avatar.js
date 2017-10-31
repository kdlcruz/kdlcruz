import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import _ from 'lodash'

const styles = {
  defautSize: {
    width: '100%',
    height: '100%'
  }
}

const AvatarComponent = (props) => {
  const { classes } = props
  const borderRadius = '50%'
  return (
    <div className={classes.row}>
      <Avatar
        alt={props.alt}
        src={props.src}
        className={classes.defautSize}
        style={{
          borderRadius: _.isNull(props.borderRadius) ? borderRadius : props.borderRadius
        }}
      />
    </div>
  )
}

AvatarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  borderRadius: PropTypes.string
}

export default withStyles(styles)(AvatarComponent)
