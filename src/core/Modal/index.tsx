import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
  ModalProps
} from '@material-ui/core'
import Image from 'next/image'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'

import Text from '../Text'

const Container = withStyles(theme => ({
  root: {
    '& .MuiBackdrop-root': {
      background: 'linear-gradient(180deg, rgba(10, 16, 10, 0.8) 0%, rgba(9, 17, 9, 0.8) 100%)',
      backdropFilter: 'blur(20px)'
    }
  },
  paper: {
    background: 'transparent',
    boxShadow: 'none',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      width: '100%'
    }
  },
  container: {}
}))(Dialog)

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fontSize: '28px',
      lineHeight: '48px',
      color: theme.palette.common.white,
      textAlign: 'center'
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(3),
      top: 0,
    },
  })

export interface TitleProps extends WithStyles<typeof styles> {
  id: string,
  children: React.ReactNode,
  onClose: ModalProps['onClose']
}

const Title = withStyles(styles)((props: TitleProps) => {
  const { children, classes, onClose, ...other } = props;

  const handleClose = (e: {}) => {
    if (onClose) {
      onClose(e, 'escapeKeyDown')
    }
  }

  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Text type="white" variant="h3">{children}</Text>
      { onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <Image src="/icons/close.svg" width={14} height={14} alt="Close modal" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const Content = withStyles(theme => ({
}))(DialogContent)

const Actions = withStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
    display: 'flex',
    flexDirection: 'column'
  },
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 0,
      marginTop: theme.spacing(1.5)
    }
  }
}))(DialogActions)

const Modal = {
  Container,
  Title,
  Content,
  Actions
}

export default Modal
