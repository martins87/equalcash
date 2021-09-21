import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Logo from '../Logo'
import SocialIcon from '../SocialIcon'
import useStyles from './styles'

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.footerItems}>

        <Box className={classes.top}>
          <Box className={classes.logo}>
            <Logo width="109" height="31" />
          </Box>

          <Box className={classes.footerLinks}>
            <Grid container spacing={4}>
              <Grid item><Typography className={classes.text}>Docs</Typography></Grid>
              <Grid item><Typography className={classes.text}>Privacy Policy</Typography></Grid>
              <Grid item><Typography className={classes.text}>Risks</Typography></Grid>
              <Grid item><Typography className={classes.text}>Terms of Use</Typography></Grid>
            </Grid>
          </Box>
        </Box>

        <Box className={classes.bottom}>
          <Typography
            className={classes.text}
            style={{ fontSize: '10px', fontWeight: 400 }}>
            Copyright © 2021 Composable Finance. All rights reserved.
          </Typography>

          <Box className={classes.socialIcons}>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
              <Grid item><SocialIcon socialIcon="twitter" width="18" height="18" /></Grid>
              <Grid item><SocialIcon socialIcon="medium" width="18" height="18" /></Grid>
              <Grid item><SocialIcon socialIcon="telegram" width="18" height="18" /></Grid>
              <Grid item><SocialIcon socialIcon="discord" width="18" height="18" /></Grid>
              <Grid item><SocialIcon socialIcon="github" width="18" height="18" /></Grid>
              <Grid item><SocialIcon socialIcon="linkedin" width="18" height="18" /></Grid>
            </Grid>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Footer
