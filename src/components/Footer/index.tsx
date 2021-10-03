import Image from 'next/image'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import SocialIcon from '../SocialIcon'

const MUIText = styled('p')(() => ({
  fontFamily: 'Konnect',
  fontWeight: 400,
  fontStyle: 'normal',
  fontSize: '16px',
  color: 'rgba(37, 37, 37, 0.6)',
}))

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container rowSpacing={20} justifyContent="space-between" direction="column">

          {/** top */}
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Image src="/assets/images/logo.svg" alt="Composable logo" width="160" height="45" />
            </Grid>
            <Grid item>
              <Grid container spacing={4} justifyContent="flex-end">
                <Grid item>
                  <MUIText>Docs</MUIText>
                </Grid>
                <Grid item>
                  <MUIText>Privacy Policy</MUIText>
                </Grid>
                <Grid item>
                  <MUIText>Risks</MUIText>
                </Grid>
                <Grid item>
                  <MUIText>Terms of Use</MUIText>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/** bottom */}
          <Grid item container justifyContent="space-between">
            <Grid item>
              <MUIText
                style={{ fontSize: '12px', fontWeight: 400 }}>
                Copyright &copy; 2021 Composable Finance. All rights reserved.
              </MUIText>
            </Grid>
            <Grid item>
              <Grid container spacing={6} justifyContent="flex-end">
                <Grid item><SocialIcon socialIcon="twitter" width="18" height="18" /></Grid>
                <Grid item><SocialIcon socialIcon="medium" width="18" height="18" /></Grid>
                <Grid item><SocialIcon socialIcon="telegram" width="18" height="18" /></Grid>
                <Grid item><SocialIcon socialIcon="discord" width="18" height="18" /></Grid>
                <Grid item><SocialIcon socialIcon="github" width="18" height="18" /></Grid>
                <Grid item><SocialIcon socialIcon="linkedin" width="18" height="18" /></Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
