import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontFamily: 'Crimson Text',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '20px',
    color: '#252525',
  }
}))

export interface TimeProps {
  time: string
}

const Time = ({ time }: TimeProps) => {
  const classes = useStyles()

  return (
    <Typography className={classes.text}>
      {time}
    </Typography>
  )
}

export default Time
