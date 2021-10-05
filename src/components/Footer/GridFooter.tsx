import Image from 'next/image'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

import SocialIcon from '../SocialIcon'

const PREFIX = 'Footer'
//const theme = useTheme()

const classes = {
  root: `${PREFIX}-root`,
  rows: `${PREFIX}-rows`,
  items: `${PREFIX}-items`,
  text: `${PREFIX}-text`,
}

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    //background: 'linear-gradient(180deg, #FFF5DF 0%, #FFEFCA 92.71%)',
    //background: 'red',
    width: '100%',
    height: '300px',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [`& .${classes.rows}`]: {
    //background: 'lightgray',
  },
  [`& .${classes.items}`]: {
    //background: 'green',
    display: 'flex',
    [useTheme().breakpoints.down('sm')]: {
      //background: 'blue',
    }
  },
  [`& .${classes.text}`]: {
    fontFamily: 'Konnect',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '16px',
    color: 'rgba(37, 37, 37, 0.6)',
  }
}))

const Footer = () => {
  return (
    <footer>
      <Root className={classes.root}>
        <Container>
          <Grid container className={classes.rows} justifyContent="space-between" rowSpacing={16}>

            {/** top */}
            <Grid item container alignItems="center" justifyContent="space-between">
              <Grid item className={classes.items}>
                <Image src="/assets/images/logo.svg" alt="Composable logo" width="160" height="45" />
              </Grid>
              <Grid item className={classes.items}>
                <Grid container spacing={4} justifyContent="flex-end">
                  <Grid item>
                    <Typography className={classes.text}>Docs</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.text}>Privacy Policy</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.text}>Risks</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.text}>Terms of Use</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/** bottom */}
            <Grid item container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography
                  className={classes.text}
                  style={{ fontSize: '12px', fontWeight: 400 }}>
                  Copyright &copy; 2021 Composable Finance. All rights reserved.
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={6} justifyContent="flex-end">
                  <Grid item>
                    <SocialIcon socialIcon="twitter" width="18" height="18" />
                  </Grid>
                  <Grid item>
                    <SocialIcon socialIcon="medium" width="18" height="18" />
                  </Grid>
                  <Grid item>
                    <SocialIcon socialIcon="telegram" width="18" height="18" />
                  </Grid>
                  <Grid item>
                    <SocialIcon socialIcon="discord" width="18" height="18" />
                  </Grid>
                  <Grid item>
                    <SocialIcon socialIcon="github" width="18" height="18" />
                  </Grid>
                  <Grid item>
                    <SocialIcon socialIcon="linkedin" width="18" height="18" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Root>
    </footer>
  )
}

export default Footer
