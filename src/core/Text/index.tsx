import { Typography, TypographyProps } from '@material-ui/core'

import theme from '../../theme'
import { AllColorType } from '../types'

interface TextProps extends TypographyProps {
  type: AllColorType
}

const Text = ({ children, type, ...props }: TextProps) => {
  const color = (type !== 'black' && type !== 'white')
    ? theme.palette[type]?.main
    : theme.palette.common[type]

  const colorStyle = {
    color: color || theme.palette.text.primary
  }

  return (
    <Typography {...props} style={colorStyle}>
      {children}
    </Typography>
  )
}

Text.defaultProps = {
  type: 'text'
}

export default Text
