import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    borderRadius: '10px',
    //border: '1px solid #000000',
    display: 'grid',
    placeItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF',
    width: '524px',
    height: '80px',
    overflow: 'hidden',
  },
  content: {
    width: '346px',
    height: '40px',
    textAlign: 'center'
  },
  message: {
    fontFamily: 'Crimson Text',
    fontWeight: 600,
    fontSize: '14px',
    color: '#000000'
  },
  border: {
    position: 'absolute',
    left: '0px',
    width: '7px',
    height: '100%',
    backgroundColor: '#EF4A50',
  }
}));

export type WarningBoxProps = {
  message: string
}

const WarningBox = ({ message }: WarningBoxProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.border}></div>
      <Box className={classes.content}>
        <Typography className={classes.message}>{message}</Typography>
      </Box>
    </Box>
  )
}

export default WarningBox;
