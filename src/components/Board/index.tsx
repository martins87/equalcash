import React from 'react';

import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '10px',
    display: 'grid',
    placeItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    fontFamily: 'Konnect',
  }
}));

export type BoardProps = {
    color: string,
    width: string,
    height: string,
    children: React.ReactNode
}

const Board = ({color, width, height, children}: BoardProps) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      style={{
        background: color,
        width: `${width}px`,
        height: `${height}px`
      }}>
      {children}
    </Box>
  )
}

export default Board;

