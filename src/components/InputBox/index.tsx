import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: 'rgba(37, 37, 37, 0.06)',
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100px',
    fontFamily: 'Konnect',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '24px',
  }
}));

interface InputBoxProps {
  children?: any
}

const InputBox = ({ children }: InputBoxProps) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Input defaultValue={0} type="number" className={classes.input} disableUnderline />
      {children}
    </Box>
  )
}

export default InputBox
