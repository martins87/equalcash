import { Typography, Box, Container } from '@material-ui/core'

import Button from '../core/Button'
import Token from '../core/Token'
import Collateral from '../core/Collateral'
import Panel from '../core/Panel'
import { RadialBar } from '../core/Chart'
import RatioBar from '../core/RatioBar'
import Slider from '../core/Slider'

import { tokens, collaterals } from '../config/data'

const Components = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography component="h1" variant="h1" gutterBottom>
          Core components
        </Typography>
      </Box>

      <Typography component="h3" variant="h3">Small Buttons</Typography>
      <Box m={2} display="flex" justifyContent="space-between">
        <Button variant="contained" size="small">Max</Button>
        <Button variant="contained" color="secondary" size="small">Max</Button>
        <Button variant="contained" size="small" disabled>Max</Button>
        <Button variant="contained" size="small" color="secondary" disabled>Max</Button>
      </Box>

      <Typography component="h3" variant="h3">Medium Buttons</Typography>
      <Box m={2} display="flex" flexWrap="wrap" justifyContent="space-between">
        <Button>Manage</Button>
        <Button disabled>Earn</Button>
        <Button color="secondary">Log out</Button>
        <Button color="secondary" disabled>Log out</Button>
      </Box>

      <Typography component="h3" variant="h3">Tokens</Typography>
      <Box m={2} display="flex" flexWrap="wrap" justifyContent="space-between">
        {tokens.map(token => <Token key={token.name} {...token} />)}
      </Box>

      <Typography component="h3" variant="h3">Collateral Amounts</Typography>
      <Box m={2} display="flex" flexWrap="wrap" justifyContent="space-between">
        {collaterals.map(token => <Collateral key={token.symbol} {...token} />)}
      </Box>

      <Typography component="h3" variant="h3">Radial Charts</Typography>
      <Box m={2} display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <RadialBar label="Earn APY" value={58.5} width="90px" height="90px" size="small" />
        <RadialBar label="Earn APY" value={58.5} width="180px" height="180px" />
        <RadialBar label="Earn APY" value={58.5} width="180px" height="180px" color="info" />
        <RadialBar label="Earn APY" value={58.5} width="180px" height="180px" color="success" />
        <RadialBar label="Earn APY" value={58.5} width="180px" height="180px" color="secondary" />
      </Box>

      <Typography component="h3" variant="h3">Panels</Typography>
      <Box m={2} display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Panel type="primary" p={3}>primary background color</Panel>
        <Panel type="secondary" p={3}>secondary background color</Panel>
      </Box>

      <Typography component="h3" variant="h3">Ratios</Typography>
      <Box m={2} display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box mb={2} width="100%">
          <RatioBar percentage={80} />
        </Box>
        <RatioBar percentage={70} size="medium" />
      </Box>

      <Typography component="h3" variant="h3">Sliders</Typography>
      <Box m={2}>
        <Slider amount={21.3} safeAmount={55} limitAmount={72} totalAmount={100} />
      </Box>
      <Box m={2}>
        <Slider amount={61} safeAmount={55} limitAmount={72} totalAmount={100} />
      </Box>
      <Box m={2}>
        <Slider amount={93} safeAmount={55} limitAmount={72} totalAmount={100} />
      </Box>
    </Container>
  )
}

export default Components
