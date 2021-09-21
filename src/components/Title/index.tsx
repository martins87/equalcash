import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

export interface TitleProps {
  title: string,
  top?: string,
  bottom?: string,
  centered?: boolean
}

const Title = ({title, top, bottom, centered}: TitleProps) => {
  const classes = useStyles()

  return (
    <Box textAlign={centered ? 'center' : 'left'} mt={10} mb={10} ml={3}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
      {top && (
        <Typography className={classes.description}>
          {top}
        </Typography>
      )}
      {bottom && (
        <Typography style={{fontWeight: 'bold'}} className={classes.description}>
          {bottom}
        </Typography>
      )}
    </Box>
  )
}

export default Title
