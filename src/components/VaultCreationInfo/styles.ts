import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '50px 50px 91px 50px'
  },
  title: {
    fontFamily: 'Crimson Text',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '24px',
    color: 'rgba(37, 37, 37, 1)'
  },
  text: {
    fontFamily: 'Crimson Text',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '20px',
    color: 'rgba(37, 37, 37, 0.7)'
  },
  bold: {
    fontWeight: 700
  },
  green: {
    color: '#3EB859'
  }
}))

export default useStyles