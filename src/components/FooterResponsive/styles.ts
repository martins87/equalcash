import { makeStyles, Theme } from '@material-ui/core'
import { Autorenew } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'linear-gradient(180deg, #FFF5DF 0%, #FFEFCA 92.71%)',
    //width: '100%',
  },
  footerItems: {
    width: '80%',
    height: '230px',
    border: '1px solid gray',
    display: 'grid',
    flexGrow: 4,
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      justifyContent: 'space-between',
    },
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  footerLinks: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  text: {
    fontFamily: 'Konnect',
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '12px',
    color: 'rgba(37, 37, 37, 0.6)',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  top: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
  bottom: {
    width: '100%',
    //height: '36px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  socialIcons: {
    //border: '1px solid black',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  }
}));

export default useStyles
