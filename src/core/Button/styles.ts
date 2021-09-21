import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    lineHeight: '30px',
    padding: theme.spacing(1, 5)
  },
  sizeSmall: {
    fontSize: '14px',
    lineHeight: '22px',
    padding: theme.spacing(0.5, 1),
    borderRadius: '5px',
  },
  contained: {
    color: theme.palette.text.primary,
    backgroundColor: fade(theme.palette.common.white, 0.04),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.2)
    }
  },
  outlined: {
    borderWidth: '2px',
    color: theme.palette.common.white,
    '&:hover': {
      borderWidth: '2px'
    },
    '&.Mui-disabled': {
      color: theme.palette.common.white,
      borderWidth: '2px'
    }
  },
  disabled: {
    opacity: 0.3
  },
  outlinedPrimary: {
    borderColor: theme.palette.primary.main,
    '&.Mui-disabled': {
      borderColor: theme.palette.primary.main,
    }
  },
  outlinedSecondary: {
    borderColor: theme.palette.secondary.main,
    '&.Mui-disabled': {
      borderColor: theme.palette.secondary.main,
    }
  },
  containedPrimary: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    '&.Mui-disabled': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    }
  },
  containedSecondary: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    '&.Mui-disabled': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.light,
    }
  }
}))

export default useStyles
