import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Address from './Address'
import EtherscanLink from './EtherscanLink'
import Time from './Time'
import ActionToken from './ActionToken'
import AmountToken from './AmountToken'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    height: '150px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  head: {
    display: 'grid',
    alignItems: 'center'
  },
  footer: {
    position: 'absolute',
    bottom: '0px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    width: '100%',
    height: '100px',
    boxShadow: '0px -20px 20px rgba(50, 50, 50, 0.05)'
  },
  items: {
    width: '100%',
    position: 'absolute',
    top: '0px',
    padding: '14px 50px 35px 50px',
    boxSizing: 'border-box',
  },
  text: {
    color: 'rgba(37, 37, 37, 0.7)',
    fontFamily: 'Crimson Text',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '18px',
    marginBottom: '42px',
  }
}))

const HistoryTable = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.head}></Box>
      <Box className={classes.footer}></Box>
      <Box className={classes.items}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography className={classes.text}>Action</Typography>
            <ActionToken action="Deposit" token="dai" />
          </Grid>
          <Grid item>
            <Typography className={classes.text}>Time</Typography>
            <Time time="Aprl 15, 22:54" />
          </Grid>
          <Grid item>
            <Typography className={classes.text}>Amount</Typography>
            <AmountToken token="ksm" value={432.21} />
          </Grid>
          <Grid item>
            <Typography className={classes.text}>Address</Typography>
            <Address address="0x575c282c8b2e0f8560d6eba373ae70f5e029faa8" />
          </Grid>
          <Grid item>
            <Box className={classes.text} style={{ width: '24px', height: '24px' }}></Box>
            <EtherscanLink />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default HistoryTable
