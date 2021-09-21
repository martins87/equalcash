import React, { useRef, useEffect } from 'react'
import { Box, BoxProps } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'

import theme from '../../theme'
import { AllColorType } from '../types'

interface PanelProps extends BoxProps {
  type: AllColorType,
  opacity?: number
}

const getColor = (type: AllColorType, opacity = 0.1) => {
  const color = (type !== 'black' && type !== 'white')
    ? theme.palette[type].main
    : theme.palette.common[type]
  return fade(color, opacity)
}

const Panel = ({ children, type, opacity, ...props }: PanelProps) => {
  const style = {
    backgroundColor: getColor(type, opacity),
    color: getColor(type, 1)
  }

  return (
    <Box borderRadius={12} {...props} style={style}>
      {children}
    </Box>
  )
}

Panel.defaultProps = {
  className: '',
  type: 'white'
}

export default Panel
