import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@material-ui/core'

import useStyles from './styles'

interface ButtonProps extends MuiButtonProps {
  loading: boolean
}

const Button = ({ children, loading, className, ...props }: ButtonProps) => {
  const classes = useStyles()

  return (
    <MuiButton {...props} className={className} classes={classes}>
      {children}
    </MuiButton>
  )
}

Button.defaultProps = {
  variant: 'outlined',
  loading: false,
  color: 'primary'
}

export default Button
