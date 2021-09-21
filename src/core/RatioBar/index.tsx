import { MouseEvent } from 'react'
import useStyles from './styles'

type SizeType = 'small' | 'medium'

interface RatioBarProps {
  size: SizeType,
  percentage: number
}

const RatioBar = ({ size, percentage }: RatioBarProps) => {
  const classes = useStyles()

  const borrowStyle = {
    flex: `0 0 ${percentage}%`
  }

  return (
    <div className={`${classes.root} ${size}`}>
      <div className={`${classes.borrow} ${size}`} style={borrowStyle}></div>
      <div className={`${classes.rest} ${size}`}></div>
    </div>
  )
}

RatioBar.defaultProps = {
  size: 'small'
}

export default RatioBar
