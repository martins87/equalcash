import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#252525',
    height: '50px',
    borderRadius: '10px',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #252525',
    boxSizing: 'border-box'
  },
  text: {
    height: '30px',
    fontFamily: 'Crimson Text',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textTransform: 'capitalize'
  }
}))

export default useStyles
