import React from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Board from '../Board'

const useStyles = makeStyles(theme => ({
  table: {
    width: '620px',
    height: '186px',
  },
  tableItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  labelText: {
    fontFamily: 'Konnect',
    fontWeight: 400,
    fontSize: '18px',
    color: 'rgba(37, 37, 37, 0.7)'
  },
  dataText: {
    marginTop: '4px',
    height: '48px',
    fontFamily: 'Konnect',
    fontWeight: 400,
    fontSize: '24px',
    color: '#252525'
  }
}));

export type InfoProps = {
  label: string,
  data: string
}

const Info = ({ label, data }: InfoProps) => {
  const { labelText, dataText } = useStyles();

  return (
    <>
      <Typography className={labelText}>{label}</Typography>
      <Typography className={dataText}>{data}</Typography>
    </>
  );
}

const VaultInfo = () => {
  const { table, tableItems } = useStyles();

  return (
    <Board color="#fff8e8" width="850" height="246">
      <Box className={table}>
        <Grid container justify="space-between" style={{ height: '100%' }}>
          <Box className={tableItems}>
            <Grid item><Info label="Liquidation Price" data="$0.99" /></Grid>
            <Grid item><Info label="Current DAI/USD price" data="$1.00" /></Grid>
          </Box>
          <Box className={tableItems}>
            <Grid item><Info label="Collateralization ratio" data="101%" /></Grid>
            <Grid item><Info label="Collateral Locked" data="1000.00 PATdai" /></Grid>
          </Box>
        </Grid>
      </Box>
    </Board>
  )
}

export default VaultInfo
