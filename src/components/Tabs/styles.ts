import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '850px',
    backgroundColor: '#FFF5DE',
    borderRadius: '10px',
  },
  appbar: {
    borderRadius: '10px',
    backgroundColor: 'inherit',
    width: '850px',
  },
  tabs: {
    borderRadius: '10px 10px 0 0',
  },
  tab: {
    backgroundColor: 'inherit',
    borderRadius: '10px 10px 0 0',
    color: 'rgba(37, 37, 37, 0.7)',
    fontFamily: 'Konnect',
    textTransform: 'none',
  },
  tabpanel: {
    padding: '0 26px',
    boxSizing: 'border-box',
    backgroundColor: '#FFF',
    //border: '1px solid #DCDCDC',
    width: 'inherit',
    height: '484px',
    borderRadius: '10px',
  },
  text: {
    fontFamily: 'Konnect',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '18px',
    color: '#252525'
  },
  linetext: {
    fontFamily: 'Crimson Text',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '24px',
    color: 'rgba(37, 37, 37, 0.7)'
  },
  grid: {
    position: 'static'
  },
  line: {
    backgroundColor: 'rgba(37, 37, 37, 0.7)',
    //border: '1px solid rgba(37, 37, 37, 0.7)',
    width: '335px',
    height: '1px',
  },
  tokenindicator: {
    position: 'absolute',
    boxSizing: 'border-box',
    padding: '8px 8px 8px 12.25px',
    right: '20px',
    backgroundColor: '#FFF',
    height: '40px',
    width: '200px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  tokenIndicatorBox: {
    display: 'flex',
    alignItems: 'center',
    width: '24px',
    height: '24px',
  },
  collapse: {
    display: 'flex',
    alignItems: 'center',
    width: '24px',
    height: '24px',
  },

  root2: {
    width: '850px',
  }
}))

export default useStyles
