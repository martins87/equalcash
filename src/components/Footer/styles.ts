import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //position: 'fixed',
    //bottom: 0,
    background: 'linear-gradient(180deg, #FFF5DF 0%, #FFEFCA 92.71%)',
    width: '100%',
    height: '300px',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerItems: {
    position: 'relative',
    width: '1100px',
    height: '230px',
  },
  text: {
    fontFamily: 'Konnect',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '12px',
    color: 'rgba(37, 37, 37, 0.6)',
  },
  top: {
    position: 'relative',
    display: 'grid',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    top: '4px',
    left: '0px',
  },
  footerLinks: {
    position: 'absolute',
    top: '4px',
    right: '0px',
  },
  bottom: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%',
    height: '36px',
    display: 'grid',
    alignItems: 'center'
  },
  socialIcons: {
    position: 'absolute',
    right: '0px',
  }
}));

export default useStyles