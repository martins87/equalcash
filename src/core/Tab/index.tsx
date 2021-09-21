import { Tabs as MuiTabs, Tab as MuiTab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

export const Tabs = withStyles(theme => ({
  root: {
    backgroundColor: '#FFFFFF05',
    borderRadius: '12px',
    minHeight: '45px'
  },
  indicator: {
    display: 'none'
  }
}))(MuiTabs)

export const Tab = withStyles(theme => ({
  root: {
    minHeight: '45px'
  },
  selected: {
    backgroundColor: '#FFFFFF05',
    borderRadius: '12px',
    color: theme.palette.common.white
  }
}))(MuiTab)

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

export const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`warp-tabpanel-${index}`}
      aria-labelledby={`warp-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}
