
import React from 'react';
import Box from '@material-ui/core/Box';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import useStyles from './styles';

const Ball = () => {
  const classes = useStyles();

  return (
    <Box className={classes.ball}></Box>
  )
}

export type WalletConnectorProps = {
  address: string
}

const WalletConnector = ({ address }: WalletConnectorProps) => {
  const classes = useStyles()

  const formattedAddress = () => {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length)
  }

  return (
    <Box className={classes.root}>
      <Box>
        <Ball />
      </Box>
      <Box className={classes.address}>
        {formattedAddress()}
      </Box>
      <Box className={classes.power}>
        <PowerSettingsNewIcon />
      </Box>
    </Box>
  )
}

export default WalletConnector