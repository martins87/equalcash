import React, { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { Typography } from '@material-ui/core'

interface TokenProps {
  className?: string,
  icon: React.ReactNode,
  name: string,
  color: string
}

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '12px',
    padding: theme.spacing(2, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    marginTop: theme.spacing(1),
    color: theme.palette.common.white
  },
  icon: {
    width: '35px',
    height: '35px',
  }
}))

const Token = ({ icon, name, color, className }: TokenProps) => {
  const classes = useStyles()

  const style = useMemo(() => ({
    backgroundColor: fade(color, 0.1),
  }), [color])

  return (
    <div
      className={`${classes.root} ${className}`}
      style={style}
    >
      <div className={classes.icon}>{icon}</div>
      <Typography className={classes.name}>{name}</Typography>
    </div>
  )
}

export default Token
