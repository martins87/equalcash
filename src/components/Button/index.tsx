import React from 'react'
import Box from '@material-ui/core/Box'
import { Button as MuiButton } from '@material-ui/core'

import useStyles from './styles'  

export type ButtonProps = {
  transparent?: boolean,
  label: string,
  width: string
}

const Button = ({transparent = false, label, width}: ButtonProps) => {
  const classes = useStyles();

  return (
    <MuiButton
      className={classes.root}
      style={{
        background: transparent ? '#FFF5DE' : '#252525',
        color: transparent ? '#000000' : '#FFFFFF',
        width: `${width}px`,
      }}>
      <Box className={classes.text}>
        {label}
      </Box>
    </MuiButton>
  )
}

export default Button
