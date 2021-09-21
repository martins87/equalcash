import { Container, Typography } from '@material-ui/core'

import Title from '../components/Title'
import Pagination from '../components/Pagination'

const Portfolio = () => {
  return (
    <Container>
      <Title
        centered
        title="Portfolio"
        top="Portfolio page"
        bottom="But also with a Pagination example" />

      <Pagination />
    </Container>
  )
}

export default Portfolio
