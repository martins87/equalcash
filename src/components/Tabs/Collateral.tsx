import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import InputBox from '../InputBox'
import SVGImage from '../SVGImage'
import useStyles from './styles'

export type TokenIndicatorProps = {
  children?: any,
  tokenName: string,
  imageFile: string,
}

const TokenIndicator = (props: TokenIndicatorProps) => {
  const { tokenName, imageFile } = props
  const classes = useStyles()

  return (
    <Box className={classes.tokenindicator}>
      <Grid
        container
        justify="space-between"
        alignItems="center">
        <Grid item className={classes.tokenIndicatorBox}>
          <SVGImage src={`Tokens/${imageFile}`} width="23.5" height="23.26" />
        </Grid>
        <Grid item>
          <Typography className={classes.text}>
            {tokenName}
          </Typography>
        </Grid>
        <Grid item className={classes.collapse}>
          {props.children ? props.children : null}
        </Grid>
      </Grid>
    </Box>
  )
}

const HorizontalLine = () => {
  const classes = useStyles()

  return (
    <div className={classes.line}></div>
  )
}

const Divider = () => {
  const classes = useStyles()

  return (
    <Grid
      style={{ margin: '40px 0' }}
      container
      alignItems="center"
      justify="space-between">
      <Grid item><HorizontalLine /></Grid>
      <Grid item className={classes.linetext}>OR</Grid>
      <Grid item><HorizontalLine /></Grid>
    </Grid>
  )
}

export const EqualCash = () => {
  const classes = useStyles()

  return (
    <div>
      {/* Mint Form */}
      <Grid container spacing={2}>
        {/* Mint EQLC */}
        <Grid item xs={12}>
          <Typography
            className={classes.text}
            style={{
              fontSize: '24px',
              fontWeight: 600,
            }}>
            Mint Equal Cash
          </Typography>
        </Grid>

        {/* Max | 1000.00 EQLC */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6} className={classes.grid}>
              <Typography
                className={classes.text}
                style={{ color: 'rgba(37, 37, 37, 0.7)' }}>
                Available
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid container alignItems="flex-end" justify="flex-end">
                <Grid item>
                  <Typography className={classes.text}>1000.00</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.text}
                    style={{
                      color: 'rgba(37, 37, 37, 0.7)',
                      fontSize: '12px',
                      marginLeft: '4px'
                    }}>
                    PATdai
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* InputBox */}
        <Grid item xs={12}>
          <InputBox>
            <TokenIndicator tokenName="PATdai" imageFile="dai.svg">
              <IconButton className={classes.collapse}>
                <ExpandMoreIcon />
              </IconButton>
            </TokenIndicator>
          </InputBox>
        </Grid>
      </Grid>

      <Divider />

      {/* Pay back Form */}
      <Grid container spacing={2}>
        {/* Mint EQLC */}
        <Grid item xs={12}>
          <Typography
            className={classes.text}
            style={{
              fontSize: '24px',
              fontWeight: 600,
            }}>
            Pay back Equal Cash
          </Typography>
        </Grid>

        {/* Max | 1000.00 EQLC */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6} className={classes.grid}>
              <Typography
                className={classes.text}
                style={{ color: 'rgba(37, 37, 37, 0.7)' }}>
                Max
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid container alignItems="flex-end" justify="flex-end">
                <Grid item>
                  <Typography className={classes.text}>990.09</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.text}
                    style={{
                      color: 'rgba(37, 37, 37, 0.7)',
                      fontSize: '12px',
                      marginLeft: '4px'
                    }}>
                    PATdai
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* InputBox */}
        <Grid item xs={12}>
          <InputBox>
            <TokenIndicator tokenName="PATdai" imageFile="dai.svg" />
          </InputBox>
        </Grid>
      </Grid>

    </div>
  )
}

export const EQLC = () => {
  const classes = useStyles()

  return (
    <div>
      {/* Mint Form */}
      <Grid container spacing={2}>
        {/* Mint EQLC */}
        <Grid item xs={12}>
          <Typography
            className={classes.text}
            style={{
              fontSize: '24px',
              fontWeight: 600,
            }}>
            Mint EQLC
          </Typography>
        </Grid>

        {/* Max | 1000.00 EQLC */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6} className={classes.grid}>
              <Typography
                className={classes.text}
                style={{ color: 'rgba(37, 37, 37, 0.7)' }}>
                Max
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid container alignItems="flex-end" justify="flex-end">
                <Grid item>
                  <Typography className={classes.text}>1000.00</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.text}
                    style={{
                      color: 'rgba(37, 37, 37, 0.7)',
                      fontSize: '12px',
                      marginLeft: '4px'
                    }}>
                    EQLC
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* InputBox */}
        <Grid item xs={12}>
          <InputBox>
            <TokenIndicator tokenName="EQLC" imageFile="eqlc.svg">
              <IconButton className={classes.collapse}>
                <ExpandMoreIcon />
              </IconButton>
            </TokenIndicator>
          </InputBox>
        </Grid>
      </Grid>

      <Divider />

      {/* Pay back Form */}
      <Grid container spacing={2}>
        {/* Mint EQLC */}
        <Grid item xs={12}>
          <Typography
            className={classes.text}
            style={{
              fontSize: '24px',
              fontWeight: 600,
            }}>
            Pay back EQLC
          </Typography>
        </Grid>

        {/* Max | 1000.00 EQLC */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6} className={classes.grid}>
              <Typography
                className={classes.text}
                style={{ color: 'rgba(37, 37, 37, 0.7)' }}>
                Max
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid container alignItems="flex-end" justify="flex-end">
                <Grid item>
                  <Typography className={classes.text}>990.09</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.text}
                    style={{
                      color: 'rgba(37, 37, 37, 0.7)',
                      fontSize: '12px',
                      marginLeft: '4px'
                    }}>
                    EQLC
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* InputBox */}
        <Grid item xs={12}>
          <InputBox>
            <TokenIndicator tokenName="EQLC" imageFile="eqlc.svg" />
          </InputBox>
        </Grid>
      </Grid>
    </div>
  )
}
