import React from 'react';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'

import SVGImage from '../SVGImage'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    minWidth: '111px',
    height: '24px',
  },
  tokenSymbol: {
    position: 'absolute',
    left: '0px'
  },
  tokenData: {
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    height: '24px',
  },
  value: {
    fontFamily: 'Crimson Text',
    fontSize: '18px',
    color: '#000000'
  },
  token: {
    position: 'relative',
    bottom: '-1px',
    marginLeft: '5px',
    fontFamily: 'Crimson Text',
    fontSize: '12px',
    color: 'rgba(37, 37, 37, 0.7)',
    textTransform: 'uppercase'
  }
}));

export type AmountTokenProps = {
  token: string
  value: number,
}

const AmountToken = ({ token, value }: AmountTokenProps) => {
  const classes = useStyles()

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <SVGImage src={`Tokens/${token}.svg`} width="24" height="24" />
      </Grid>
      <Grid item>
        <Box className={classes.tokenData}>
          <Typography className={classes.value}>{value}</Typography>
          <Typography className={classes.token}>{token}</Typography>
        </Box>
      </Grid>
    </Grid>
  )
};

export default AmountToken
