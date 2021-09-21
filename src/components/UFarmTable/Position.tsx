import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  val: {
    color: '#252525',
    fontFamily: 'Crimson Text',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '20px',
  },
  text: {
    color: 'rgba(37, 37, 37, 0.6)',
    fontFamily: 'Crimson Text',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '12px',
  }
}))

export type PositionProps = {
  value: string,
  description: string
}

const Position = ({value, description}: PositionProps) => {
  const { val, text } = useStyles()

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography className={val}>{value}</Typography>
      </Grid>
      <Grid item>
        <Typography className={text}>{description}</Typography>
      </Grid>
    </Grid>
  )
}

export default Position
