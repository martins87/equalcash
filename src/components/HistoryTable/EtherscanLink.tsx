import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: 'rgba(96, 96, 96, 0.04)',
    '&:hover': {
      background: 'rgba(96, 96, 96, 0.15)',
    },
    cursor: 'pointer',
    width: '160px',
    height: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(37, 37, 37, 0.7)',
  },
  icon: {
    position: 'absolute',
    left: '14px',
    width: '12px',
    height: '12px',
  },
  description: {
    position: 'absolute',
    top: '10px',
    right: '36px',
    fontFamily: 'Crimson Text',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
  },
}));

const EtherscanLink = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <LaunchIcon className={classes.icon} />
      <Typography className={classes.description}>Etherscan</Typography>
    </Box>
  )
}

export default EtherscanLink;
