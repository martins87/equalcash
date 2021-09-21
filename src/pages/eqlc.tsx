import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

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
      <Typography style={{textAlign: 'center'}}>Equal Cash page</Typography>
    </Container>
  )
}

export default EqualCash
