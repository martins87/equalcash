import { makeStyles } from '@material-ui/core'

import { Percentage, TickRange } from './types'
import Tick from './Tick'
import Bar from './Bar'
import Message from './Message'

interface SliderProps {
  safeAmount: number,
  limitAmount: number,
  totalAmount: number,
  amount: number,
  className: string
}

const useStyles = makeStyles(theme =>({
  root: {
    position: 'relative',
    paddingTop: '22px'
  }
}))

const getPercentage = ({safeAmount, limitAmount, totalAmount, amount}: SliderProps): Percentage => {
  const safe = Math.round(safeAmount / totalAmount * 1000) / 10
  const limit = Math.round(limitAmount / totalAmount * 1000) / 10
  const value = Math.round(amount / totalAmount * 1000) / 10
  let range = TickRange.SAFE
  if (value > limit ) {
    range = TickRange.LIQUIDATION
  } else if (value > safe) {
    range = TickRange.LIMIT
  }

  return { safe, limit, value, range }
}

const Slider = (props: SliderProps) => {
  const classes = useStyles()
  const percentage: Percentage = getPercentage(props)

  return (
    <div className={`${classes.root} ${props.className}`}>
      <Tick {...percentage} />
      <Bar {...percentage} />
      <Message range={percentage.range} />
    </div>
  )
}

Slider.defaultProps = {
  className: ''
}

export default Slider
