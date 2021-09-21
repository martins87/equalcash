import { makeStyles } from '@material-ui/core/styles'

import theme from '../../theme'
import { Percentage } from './types'

interface BarProps extends Percentage {
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '4px',
    borderRadius: '2px',
    marginTop: '12px'
  }
}))

const Bar = ({safe, limit}: BarProps) => {
  const classes = useStyles()

  const style = {
    background: `linear-gradient(
      90deg,
      ${theme.palette.primary.main} ${safe}%,
      ${theme.palette.warning.main} ${limit}%,
      ${theme.palette.secondary.main} 100%)
    `
  }

  return (
    <div className={classes.root} style={style}></div>
  )
}

Bar.defaultProps = {
  safe: 0,
  limit: 0
}

export default Bar
