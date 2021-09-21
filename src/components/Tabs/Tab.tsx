import React from 'react'
import { Tabs as MuiTabs, Tab as MuiTab } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import useStyles from './styles'

export const Tabs = withStyles(theme => ({
  root: {
    backgroundColor: '#FFF5DE',
    borderRadius: '10px 10px 0 0',
  },
  indicator: {
    display: 'none'
  }
}))(MuiTabs)

export const Tab = withStyles(theme => ({
  root: {
    color: 'rgba(37, 37, 37, 1)',
    fontFamily: 'Konnect',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '18px',
    textTransform: 'none',
  },
  selected: {
    color: '#FFFFFF',
    borderRadius: '10px 10px 0 0',
    backgroundColor: '#252525'
  }
}))(MuiTab)

interface TabPanelProps {
  children?: React.ReactNode,
  index: any,
  value: any,
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props
  const classes = useStyles()

  return (
    <div
      className={classes.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
