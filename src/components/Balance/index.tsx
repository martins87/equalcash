import React from 'react'
import Image from 'next/Image'
import Box from '@material-ui/core/Box'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import useStyles from './styles'

const Ball = () => {
  const classes = useStyles()

  return (
    <Box className={classes.ball}>
      <Image src="/assets/images/illustrations/03.svg" width="16.5" height="16.5" />
    </Box>
  );
}

export type BalanceProps = {
  balance: number
};

const Balance = ({ balance }: BalanceProps) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box>
        <Ball />
      </Box>
      <Box className={classes.balance}>
        {balance}
      </Box>
      <Box className={classes.arrow}>
        <ExpandMoreIcon />
      </Box>
    </Box>
  )
}

export default Balance