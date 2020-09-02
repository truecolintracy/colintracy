import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#313D47', // A50
      main: '#55828A', // Primary
      dark: '#72B3B1', // A700
    },
    secondary: {
      light: '#BADFCF', // A50
      main: '#0F9ED6', // Secondary
      dark: '#9EC9C9', // A500
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Public Sans, sans-serif',
    fontWeightLight: '300',
    fontWeightRegular: '400',
    h1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '500',
    },
    h2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '500',
    },
    h3: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '500',
    },
    h4: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '500',
    },
    h5: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '400',
    },
    h6: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '400',
    },
    subtitle1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '300',
    },
    subtitle2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '300',
    },
    body1: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: '400',
    },
    body2: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: '300',
    },
    button: {
      fontFamily: 'Public Sans, sans-serif',
      fontWeight: '500',
    },
    caption: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '400',
    },
    overline: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '400',
    },
  },
})

export default theme;
