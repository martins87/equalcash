import Image from 'next/image'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

import SocialIcon from '../SocialIcon'
import useMobile from '../../hooks/useMobile'

const PREFIX = 'Footer'
//const theme = useTheme()

const classes = {
  root: `${PREFIX}-root`,
  rows: `${PREFIX}-rows`,
  top: `${PREFIX}-top`,
  bottom: `${PREFIX}-bottom`,
  items: `${PREFIX}-items`,
  text: `${PREFIX}-text`,
  copyright: `${PREFIX}-copyright`,
}

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    background: 'linear-gradient(180deg, #FFF5DF 0%, #FFEFCA 92.71%)',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [`& .${classes.rows}`]: {
    border: '1px solid black',
    width: '100vw'
  },
  [`& .${classes.top}`]: {
    marginBottom: '150px',
    display: 'flex',
    justifyContent: 'space-between',
    [useTheme().breakpoints.down('sm')]: {
      display: 'block',
      marginBottom: '0px',
    }
  },
  [`& .${classes.bottom}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    [useTheme().breakpoints.down('sm')]: {
      display: 'block',
    }
  },
  [`& .${classes.items}`]: {
    display: 'flex',
    alignItems: 'center',
    [useTheme().breakpoints.down('sm')]: {
      display: 'grid',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '87px',
    }
  },
  [`& .${classes.text}`]: {
    fontFamily: 'Konnect',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '16px',
    color: 'rgba(37, 37, 37, 0.6)',
  },
  [`& .${classes.copyright}`]: {
    fontSize: '14px',
    [useTheme().breakpoints.down('sm')]: {
      fontSize: '12px',
    }
  }
}))

const Footer = () => {
  const onMobile = useMobile()

  const renderCopyright = () => {
    return (
      <div className={classes.items}>
        <Typography
          className={`${classes.text} ${classes.copyright}`}>
          Copyright &copy; 2021 Composable Finance. All rights reserved.
        </Typography>
      </div>
    )
  }

  return (
    <footer>
      <Root className={classes.root}>
        <Container className={classes.rows}>

          {/** top */}
          <div className={classes.top}>
            <div className={classes.items}>
              <Image src="/assets/images/logo.svg" alt="Composable logo" width="160" height="45" />
            </div>
            <div className={classes.items}>
              <Grid container spacing={4} justifyContent="center" alignItems="center">
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
            </div>
          </div>

          {/** bottom */}
          <div className={classes.bottom}>
            { !onMobile && renderCopyright() }
            <div className={classes.items}>
              <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item>
                  <SocialIcon socialIcon="twitter" width="24" height="24" />
                </Grid>
                <Grid item>
                  <SocialIcon socialIcon="medium" width="24" height="24" />
                </Grid>
                <Grid item>
                  <SocialIcon socialIcon="telegram" width="24" height="24" />
                </Grid>
                <Grid item>
                  <SocialIcon socialIcon="discord" width="24" height="24" />
                </Grid>
                <Grid item>
                  <SocialIcon socialIcon="github" width="24" height="24" />
                </Grid>
                <Grid item>
                  <SocialIcon socialIcon="linkedin" width="24" height="24" />
                </Grid>
              </Grid>
            </div>
            { onMobile && renderCopyright() }
          </div>

        </Container>
      </Root>
    </footer>
  )
}

export default Footer
