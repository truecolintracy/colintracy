import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#969492', // A50
      main: '#2d2926',  // Primary 
      dark: '#24201E'   // A700
    },
    secondary: {
      light: '#E93354', // A50
      main: '#E4002A',  // Secondary
      dark: '#9F001D'   // A500
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '600',
    h1: {
      fontFamily: 'PT Sans Narrow, Helvetica, Arial, sans-serif',
      fontWeight: '700'
    },
    h2: {
      fontFamily: 'PT Sans Narrow, Helvetica, Arial, sans-serif',
      fontWeight: '700'
    },
    h3: {
      fontFamily: 'PT Sans Narrow, Helvetica, Arial, sans-serif',
      fontWeight: '700'
    },
    h4: {
      fontFamily: 'PT Sans Narrow, Helvetica, Arial, sans-serif',
      fontWeight: '700'
    },
    h5: {
      fontFamily: 'PT Sans Narrow, Helvetica, Arial, sans-serif',
      fontWeight: '700'
    },
    h6: {
      fontFamily: 'PT Sans Narrow, Helvetica, Arial, sans-serif',
      fontWeight: '700'
    },
    subtitle1: {
      fontFamily: 'PT Sans Narrow, Helvetica, Arial, sans-serif',
      fontWeight: '400'
    },
    subtitle2: {
      fontFamily: 'PT Sans Narrow, Helvetica, Arial, sans-serif',
      fontWeight: '400'
    },
    body1: {
      fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
      fontWeight: '400'
    },
    body2: {
      fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
      fontWeight: '400'
    },
    button: {
      fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
      fontWeight: '400'
    },
    caption: {
      fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
      fontWeight: '400'
    },
    overline: {
      fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
      fontWeight: '400'
    }
  },
});

export default theme;
