import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Crimson Text, serif',
    fontSize: 16,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: '48px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '36px',
      lineHeight: '56px',
      fontWeight: 500
    },
    h3: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: 400
    },
    h4: {
      fontSize: '18px',
      lineHeight: '28px'
    },
    h6: {
      fontSize: '10px',
      lineHeight: '16px'
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '25px'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '22px'
    },
    button: {
      fontSize: '16px',
      lineHeight: '25px',
      fontWeight: 400,
      textTransform: 'none'
    }
  },
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(37, 37, 37, 1)',
      light: 'rgba(37, 37, 37, 0.6)',
    },
    secondary: {
      main: '#FF6666',
      light: '#FF666626',
      dark: '#FF666655'
    },
    info: {
      main: '#EC7EFF',
      light: '#EC7EFF26'
    },
    success: {
      main: '#30DCD2',
      light: '#30DCD226'
    },
    warning: {
      main: '#FF8A1E'
    },
    text: {
      //primary: '#A9A9A9',
      primary: '#252525'
    }
  },
  shape: {
    borderRadius: 12
  },
  mixins: {
    toolbar: {
      minHeight: 80
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
         body: {
           //background: 'linear-gradient(180deg, #0A100A 0%, #091109 100%)',
           backgroundColor: '#FFF5DE',
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
        },
      },
    },
  }
}, [
  {
    props: {
      MuiButton: {
        disableElevation: true
      }
    }
  }
]);

export default theme
