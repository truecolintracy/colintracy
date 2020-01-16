import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    color: theme.palette.grey[500],
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4)
    }
  },
  carouselContainer: {
    position: "relative",
    zIndex: 1
  },
  quoteTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 100,
    width: 100,
    opacity: "0.5",
    transform: "rotate(190deg)"
  },
  quoteBottomRight: {
    position: "absolute",
    bottom: 75,
    right: 25,
    height: 100,
    width: 100,
    opacity: "0.5",
    transform: "rotate(10deg)"
  },
  carouselContent: {
    fontSize: 25,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10)
  }
}));

export default useStyles;
