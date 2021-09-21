import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import TokenBox from '../TokenBox'
import TokenValueBox from '../TokenValueBox'
import Position from './Position'
import Button from '../Button'
import ExpandMoreButton from '../ExpandMoreButton'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    height: '150px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  head: {
    display: 'grid',
    alignItems: 'center'
  },
  footer: {
    position: 'absolute',
    bottom: '0px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    width: '100%',
    height: '100px',
    boxShadow: '0px -20px 20px rgba(50, 50, 50, 0.05)'
  },
  items: {
    width: '100%',
    position: 'absolute',
    top: '0px',
    padding: '14px 50px 35px 50px',
    boxSizing: 'border-box',
  },
  text: {
    color: 'rgba(37, 37, 37, 0.7)',
    fontFamily: 'Crimson Text',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '18px',
    marginBottom: '42px',
  }
}))

interface UFarmTableProps {
  number: number
}

const UFarmTable = ({number}: UFarmTableProps) => {
  const { root, head, footer, items, text } = useStyles()

  return (
    <Box className={root}>
      <Box className={head}></Box>
      <Box className={footer}></Box>
      <Box className={items}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography className={text}>Asset</Typography>
            <TokenBox token="dai" label={`Line ${number}`} />
          </Grid>
          <Grid item>
            <Typography className={text}>APY</Typography>
            <Typography className={text} style={{ fontSize: '20px', color: '#252525' }}>102.82%</Typography>
          </Grid>
          <Grid item>
            <Typography className={text}>My Treasury</Typography>
            <TokenValueBox token="ksm" value={432.21} />
          </Grid>
          <Grid item>
            <Typography className={text}>My Position</Typography>
            <Box mt={-1}>
              <Position value="$ 12,564.45" description="25% of total vault TVL" />
            </Box>
          </Grid>
          <Grid item>
            <Typography className={text}>Gains / Month</Typography>
            <TokenValueBox token="dai" value={432.21} />
          </Grid>
          <Grid item>
            <Box className={text} style={{ width: '100%', height: '24px' }}></Box>
            <Box style={{ marginTop: '-14px'}}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button label="Deposit" width="160" />
                </Grid>
                <Grid item>
                  <Button label="Withdraw" width="160" />
                </Grid>
                <Grid item>
                  <ExpandMoreButton />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default UFarmTable
