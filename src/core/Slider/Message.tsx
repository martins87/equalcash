import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import theme from '../../theme'
import { TickRange } from './types'

interface MessageProps {
  range: TickRange
}

const Colors: Record<TickRange, string> = {
  [TickRange.SAFE]: theme.palette.primary.main,
  [TickRange.LIMIT]: theme.palette.warning.main,
  [TickRange.LIQUIDATION]: theme.palette.secondary.main
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '12px'
  }
}))

const Message = ({ range }: MessageProps) => {
  const classes = useStyles()
  const style = {
    color: Colors[range]
  }

  return (
    <Typography className={classes.root}>
      <span>Your position is </span>
      <Typography component="span" style={style}>{ range }</Typography>
    </Typography>
  )
}

export default Message
