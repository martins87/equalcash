import { Container } from '@material-ui/core'
import { useRouter } from 'next/router'

import { Tabs, Tab, TabPanel } from '../../core/Tab'
import { Types } from '../../core/types'
import Breadcrumb from '../../components/Breadcrumb'
import Title, { TitleProps } from '../../components/Title'
import FormContainer from '../../components/FormContainer'
import BorrowForm from '../../components/BorrowForm'
import RepayForm from '../../components/RepayForm'
import BorrowOverview from '../../components/BorrowOverview'

const TabValues = ['borrow', 'repay']
const TitleValues: Record<Types, TitleProps> = {
  borrow: {
    title: 'Borrow USDC',
    description: 'Text about borrowing, what and why makes sense and what the user can do'
  },
  repay: {
    title: 'Repay USDC',
    description: 'Text about borrowing, what and why makes sense nad what the user can do'
  },
  deposit: {
    title: 'Repay USDC',
    description: 'Text about borrowing, what and why makes sense nad what the user can do'
  },
  withdraw: {
    title: 'Repay USDC',
    description: 'Text about borrowing, what and why makes sense nad what the user can do'
  }
}

const Market = () => {
  const router = useRouter()
  const { config } = router.query

  if (!config) return null

  const isArray = Array.isArray(config)
  const type = ((isArray ? config[1] : null) || 'borrow') as Types
  const pair = (isArray ? config[0] : config) as string
  const value = TabValues.indexOf(type)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    router.push(`/markets/${pair}/${TabValues[newValue]}`)
  }

  return (
    <Container>
      <Breadcrumb pair={pair} type={type} />

      <FormContainer>
        <Title {...TitleValues[type]} />

        <BorrowOverview />

        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Borrow" />
          <Tab label="Repay" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <BorrowForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RepayForm />
        </TabPanel>
      </FormContainer>
    </Container>
  )
}

export default Market
