import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: theme.spacing(3),
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: 0
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(10)
    }
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    color: theme.palette.common.white
  },
  heroTitle: {
    padding: theme.spacing(5)
  },
  heroGraphic: {
    display: "block",
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    "& img": {
      maxWidth: "100%"
    }
  },
  primaryHeroContent: {
    padding: theme.spacing(2),
    maxWidth: 900,
    margin: "0 auto",
    fontSize: 20,
    [theme.breakpoints.up("md")]: {
      fontSize: 24
    }
  }
}));

export default useStyles;
