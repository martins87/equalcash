import React from 'react'

import { Tabs as MuiTabs, Tab, TabPanel } from './Tab'
import { EQLC, EqualCash } from './Collateral'
import useStyles from './styles'

const Tabs = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root2}>
      <MuiTabs variant="fullWidth" value={value} onChange={handleChange}>
        <Tab label="PAT Collateral" />
        <Tab label="EQLC" />
      </MuiTabs>
      <TabPanel value={value} index={0}>
        <EqualCash />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EQLC />
      </TabPanel>
    </div>
  )
}

export default Tabs
