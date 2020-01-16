import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative"
  },
  block: {
    width: "100%",
    position: "relative",
    padding: theme.spacing(5),
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
    zIndex: 1,
    color: theme.palette.common.white,
    minHeight: 300,
    "& img": {
      display: "block",
      maxWidth: "100%"
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
      minHeight: 500
    }
  },
  headline: {
    marginBottom: theme.spacing(3)
  },
  content: {
    marginBottom: theme.spacing(3)
  },
  graphicOverlay: {
    position: "absolute",
    padding: theme.spacing(5),
    top: 0,
    left: 0
  },
  backgroundImage: {
    minHeight: 300,
    height: "100%",
    zIndex: 0,
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("md")]: {
      height: "auto",
      minHeight: 500
    }
  }
}));

export default useStyles;
