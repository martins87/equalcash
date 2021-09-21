import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { formattedAddress } from '../../utils/address'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'inherit',
    paddingTop: '5px',
    paddingBottom: '5px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  ball: {
    height: '17.44px',
    width: '17.62px',
    marginRight: '10px',
    background: 'linear-gradient(225.3deg, #06F9EA -1.2%, #0085FF 101.46%)',
    borderRadius: '50%'
  },
  address: {
    fontFamily: 'Crimson Text',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgba(37, 37, 37, 0.7)',
    position: 'relative',
    bottom: '-2px',
  }
}));

const Ball = () => {
  const classes = useStyles()

  return <Box className={classes.ball}></Box>
};

export type AddressProps = {
  address: string
};

const Address = ({ address }: AddressProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Ball />
      <Box className={classes.address}>{formattedAddress(address)}</Box>
    </Box>
  )
}

export default Address
