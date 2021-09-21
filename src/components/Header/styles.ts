import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    boxShadow: 'none',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  link: {
    color: 'rgba(37, 37, 37, 0.6)',
  }
}))

export default useStyles
