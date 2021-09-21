import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import Title from '../components/Title'
import Tabs from '../components/Tabs'
import VaultInfo from '../components/VaultInfo'
import VaultCreationInfo from '../components/VaultCreationInfo'
import VaultInfoTable from '../components/VaultInfoTable'
import WarningBox from '../components/WarningBox'
import Button from '../components/Button'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

const EqualCash = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Title
        centered
        title="Mint Equal Cash"
        top="Deposit your PAT receipts as collateral to mint EQLC. You can also withdraw PAT from your vault."
        bottom="This will affect your collateralization ratio, and may increase your risk of liquidation." />

      <Tabs />
      <br />
      <VaultInfo />
      <br />
      <Button label="Confirm" width="850" />
      <br />
      <Container className={classes.root}>
        <WarningBox message="With this action your vault will be at a collateralization ratio very close to the minimum required" />
      </Container>
      <br />
      <br />
      <br />

      {/* <Tabs /> */}
    </Container>
  )
}

export default EqualCash
