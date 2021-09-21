import { makeStyles, Typography } from '@material-ui/core'

import { Percentage } from './types'

interface TickProps extends Percentage {
}

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '14px',
    lineHeight: '22px',
    position: 'absolute',
    transform: 'translateX(-50%)',
    top: 0,
    '&.safe': {
      color: theme.palette.primary.main
    },
    '&.limit': {
      color: theme.palette.warning.main
    },
    '&.liquidation': {
      color: theme.palette.secondary.main
    }
  },
  triangle: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '-6px'
  }
}))

const Tick = ({ safe, limit, value, range }: TickProps) => {
  const classes = useStyles()

  const style = {
    left: `${value}%`
  }

  return (
    <span className={`${classes.root} ${range}`} style={style}>
      <Typography>{`${value}%`}</Typography>
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.triangle}>
        <path opacity="0.6" d="M1.86852 0C1.06982 0 0.59343 0.890145 1.03647 1.5547L3.16795 4.75192C3.56377 5.34566 4.43623 5.34566 4.83205 4.75192L6.96353 1.5547C7.40657 0.890145 6.93018 0 6.13148 0H1.86852Z" fill="white"/>
      </svg>
    </span>
  )
}

export default Tick
