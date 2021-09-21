import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: '#FFFFFF',
    width: '200px',
    height: '40px',
    borderRadius: '10px',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Konnect',
    fontSize: '18px',
    color: 'rgba(37, 37, 37, 0.7)',
  },
  ball: {
    position: 'absolute',
    left: '12px',
    top: '14px',
    height: '12px',
    width: '12px',
    backgroundColor: '#3EB859',
    borderRadius: '50%',
  },
  address: {
    position: 'absolute',
    left: '50px',
    top: '6px',
    width: '63px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Konnect',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  power: {
    position: 'absolute',
    right: '10px',
    top: '7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '26px',
    width: '26px',
    color: '#EF4A50',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
      background: 'rgba(239, 74, 80, 0.25)'
    }
  }
}));

export default useStyles