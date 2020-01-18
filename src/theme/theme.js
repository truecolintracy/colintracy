import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#A1D7BF", // A50
      main: "#169B62", // Primary
      dark: "#0D5D3A", // A700
    },
    secondary: {
      light: "#FFB78B", // A50
      main: "#FF883E", // Secondary
      dark: "#CC6C31", // A500
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontWeightLight: "300",
    fontWeightRegular: "400",
    h1: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: "800",
    },
    h2: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: "800",
    },
    h3: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: "800",
    },
    h4: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: "700",
    },
    h5: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: "700",
    },
    h6: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: "700",
    },
    subtitle1: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: "300",
    },
    subtitle2: {
      fontFamily: "Public Sans, sans-serif",
      fontWeight: "300",
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      // fontWeight: "400",
    },
    body2: {
      fontFamily: "Roboto, sans-serif",
      // fontWeight: "400",
    },
    button: {
      fontFamily: "Roboto, sans-serif",
      // fontWeight: "400",
    },
    caption: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "300",
    },
    overline: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: "300",
    },
  },
})

export default theme;
