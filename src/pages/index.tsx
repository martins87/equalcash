import { Container } from '@material-ui/core'

import Title from '../components/Title'
import MintTabs from '../components/Tabs'
import VaultCreationInfo from '../components/VaultCreationInfo'
import VaultInfoTable from '../components/VaultInfoTable'
import WarningBox from '../components/WarningBox'

const Home = () => {
  // As a proof-of-concept and to highlight the power of its Ethereum layer 2 interoperability solution, Composable will be launching its own multi-layer and multi-chain stablecoin. The EQLC stablecoin is backed by liquidity provider (LP) tokens from stablecoin token pairings such as USDT/DAI and USDC/DAI, as well as Uniswap’s version 3 non-fungible token (NFT) LP tokens and other interest-bearing receipt tokens. Thanks to EQLC’s novel infrastructure, it is able to deploy onto a multitude of blockchains as well as both layer 1 and layer 2 of Ethereum. The receipt tokens collateralizing EQLC are generating interest, which is being used to pay down the debt that has been used as collateral for EQLC, making EQLC effectively capable of paying for itself. Note – Existing stablecoin implementations such as MakerDAO’s DAI cannot exist natively across-layer 2 networks. Maker for instance is required to deploy a new stablecoin to the likes of Optimism, e.g. oDAI
  return (
    <Container>
      <Title
        title="Overview"
        top="As a proof-of-concept and to highlight the power of its Ethereum layer 2 interoperability solution, Composable will be launching its own multi-layer and multi-chain stablecoin. The EQLC stablecoin is backed by liquidity provider (LP) tokens from stablecoin token pairings such as USDT/DAI and USDC/DAI, as well as Uniswap’s version 3 non-fungible token (NFT) LP tokens and other interest-bearing receipt tokens. Thanks to EQLC’s novel infrastructure, it is able to deploy onto a multitude of blockchains as well as both layer 1 and layer 2 of Ethereum. The receipt tokens collateralizing EQLC are generating interest, which is being used to pay down the debt that has been used as collateral for EQLC, making EQLC effectively capable of paying for itself. Note – Existing stablecoin implementations such as MakerDAO’s DAI cannot exist natively across-layer 2 networks. Maker for instance is required to deploy a new stablecoin to the likes of Optimism, e.g. oDAI." />
      
      {/* <MintTabs /> */}
      {/*<VaultCreationInfo /> */}
      {/* <VaultInfoTable /> */}
      {/* <WarningBox message="With this action your vault will be at a collateralization ratio very close to the minimum required" /> */}
    </Container>
  )
}

export default Home
