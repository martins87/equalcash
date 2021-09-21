import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'

import SVGImage from '../SVGImage'

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontFamily: 'Crimson Text',
    fontSize: '20px',
    color: '#252525'
  }
}));

export type ActionTokenProps = {
  action: string,
  token: string
}

const ActionToken = ({ action, token }: ActionTokenProps) => {
  const classes = useStyles()

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <SVGImage src={`Tokens/${token}.svg`} width="24" height="24" />
      </Grid>
      <Grid item>
        <Typography className={classes.text}>{action}</Typography>
      </Grid>
    </Grid>
  )
};

export default ActionToken
