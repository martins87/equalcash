import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Board from '../Board';

const useStyles = makeStyles(theme => ({
  table: {
    width: '760px',
    height: '112px',
  },
  tableItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  lineItem: {
    width: '267px',
    height: '24px',
  },
  label: {
    fontFamily: 'Crimson Text',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '18px',
    color: 'rgba(37, 37, 37, 0.7)'
  },
  data: {
    fontFamily: 'Crimson Text',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '18px',
    color: '#252525'
  }
}));

export type InfoProps = {
  label: string,
  data: string
}

const Info = (props: InfoProps) => {
  const { label, data } = props;
  const classes = useStyles();

  return (
    <Box className={classes.lineItem}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography className={classes.label}>{label}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.data}>{data}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

const VaultInfoTable = () => {
  const classes = useStyles();

  return (
    <Board color="#FFFFFF" width="850" height="172">
      <Box className={classes.table}>
        <Grid container justify="space-between" style={{ height: '100%' }}>
          <Box className={classes.tableItems}>
            <Grid item><Info label="Current Price" data="$1.00" /></Grid>
            <Grid item><Info label="Collateral Ratio" data="120%" /></Grid>
            <Grid item><Info label="Minimum Ratio" data="101%" /></Grid>
          </Box>
          <Box className={classes.tableItems}>
            <Grid item><Info label="Collateral Locked" data="1000 PATdai" /></Grid>
            <Grid item><Info label="Liquidation Price" data="$0.99" /></Grid>
            <Grid item><Info label="Liquidation Penalty" data="15%" /></Grid>
          </Box>
        </Grid>
      </Box>
    </Board>
  )
}

export default VaultInfoTable
