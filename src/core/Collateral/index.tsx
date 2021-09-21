import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import useMobile from '../../hooks/useMobile'

interface CollateralProps {
  icon: React.ReactNode,
  className: string,
  usd: number,
  amount: number,
  symbol: string,
  label?: React.ReactNode
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: theme.spacing(1)
    }
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: theme.spacing(1.5)
  },
  amount: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'right'
    }
  },
  usd: {
    color: theme.palette.common.white,
    fontSize: '18px',
    lineHeight: '28px'
  },
  token: {
    fontSize: '12px',
    lineHeight: '19px'
  }
}))

const Collateral = ({ icon, label, usd, amount, symbol, className }: CollateralProps) => {
  const classes = useStyles()
  const mobile = useMobile('md')

  return (
    <div className={`${classes.root} ${className}`}>
      { mobile ? label :<div className={classes.icon}>{icon}</div> }
      <div className={classes.amount}>
        <Typography className={classes.usd}>{`$${usd}`}</Typography>
        <Typography className={classes.token}>{`${amount} ${symbol}`}</Typography>
      </div>
    </div>
  )
}

Collateral.defaultProps = {
  className: ''
}

export default Collateral
