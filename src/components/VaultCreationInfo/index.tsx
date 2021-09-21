import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Board from '../Board'
import useStyles from './styles'

const VaultCreationInfo = () => {
  const classes = useStyles()

  return (
    <>
      <Board color="#FFFFFF" width="850" height="497">
        <Box className={classes.root}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.title}>Confirm vault creation</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.text}>Review and verify details of your vault.</Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="space-between">
              <Grid item><Typography className={classes.text}>In your wallet</Typography></Grid>
              <Grid item><Typography className={`${classes.text} ${classes.bold}`}>1000 PATdai</Typography></Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="space-between">
              <Grid item><Typography className={classes.text}>Moving into Vault</Typography></Grid>
              <Grid item><Typography className={`${classes.text} ${classes.bold}`}>1000 PATdai</Typography></Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="space-between">
              <Grid item><Typography className={classes.text}>Remaining in Wallet</Typography></Grid>
              <Grid item><Typography className={`${classes.text} ${classes.bold}`}>0 PATdai</Typography></Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="space-between">
              <Grid item><Typography className={classes.text}>EQLC being minted</Typography></Grid>
              <Grid item><Typography className={`${classes.text} ${classes.bold}`}>833 EQLC</Typography></Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="space-between">
              <Grid item><Typography className={classes.text}>Collateral Ratio</Typography></Grid>
              <Grid item><Typography className={`${classes.text} ${classes.bold} ${classes.green}`}>120%</Typography></Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="space-between">
              <Grid item><Typography className={classes.text}>Liquidation Price</Typography></Grid>
              <Grid item><Typography className={`${classes.text} ${classes.bold}`}>$0.84 / Dai</Typography></Grid>
            </Grid>
          </Grid>
        </Box>
      </Board>
    </>
  )
}

export default VaultCreationInfo
