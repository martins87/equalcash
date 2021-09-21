import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontFamily: 'Crimson Text'
  },
  description: {
    color: theme.palette.primary.light,
    fontFamily: 'Konnect'
  }
}))

export default useStyles