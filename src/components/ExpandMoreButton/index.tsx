import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    background: 'rgba(37, 37, 37, 0.04)'
  }
}))

const ExpandMoreButton = () => {
  const { root } = useStyles()

  return (
    <IconButton className={root}>
      <ExpandMoreIcon />
    </IconButton>
  )
}

export default ExpandMoreButton
