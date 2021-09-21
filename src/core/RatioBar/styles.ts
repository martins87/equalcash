import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    width: '100%',
    height: '4px',
    borderRadius: '2px',
    '&.medium': {
      height: '6px',
      borderRadius: '3px'
    }
  },
  borrow: {
    backgroundColor: theme.palette.info.main,
    borderRadius: '3px',
    transition: 'all .4s ease',
    zIndex: 2,
    height: '4px',
    '&.medium': {
      height: '6px'
    },
    '&:hover': {
      transform: 'scaleY(1.2)'
    },
    '&.medium:hover': {
      transform: 'scaleY(1.2)'
    }
  },
  rest: {
    backgroundColor: theme.palette.success.main,
    borderRadius: '3px',
    transition: 'all .4s ease',
    flex: 1,
    marginLeft: '-5px',
    zIndex: 1,
    height: '4px',
    '&.medium': {
      height: '6px'
    },
    '&:hover': {
      transform: 'scaleY(1.2)'
    },
    '&.medium:hover': {
      transform: 'scaleY(1.2)'
    }
  }
}))

export default useStyles
