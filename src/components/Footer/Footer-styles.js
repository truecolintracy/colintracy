import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  footerContainer: {
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap"
    }
  },
  column: {
    minWidth: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      width: "25%",
      minWidth: 0,
      marginLeft: 0,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  },
  logoBox: {
    padding: theme.spacing(3),
    "& img": {
      display: "block",
      width: "100%"
    }
  },
  socialLinks: {
    display: "flex",
    flexGrow: 1,
    flexWrap: "nowrap",
    justifyContent: "center"
  },
  socialBox: {
    margin: theme.spacing(0.5),
    padding: 0,
    width: theme.spacing(5),
    maxWidth: theme.spacing(5)
  },
  socialLink: {
    display: "block",
    transition: "transform 0.3s ease-in-out",
    borderRadius: 0,
    position: "relative",
    zIndex: 1,
    transform: "scale(1)",
    "& img": {
      display: "block",
      maxWidth: "100%",
      minWidth: "100%"
    },
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  navHeading: {
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    fontSize: "22px",
    display: "block",
    minHeight: theme.spacing(4)
  },
  navMenuBox: {
    display: "block"
  },
  navMenuItemLink: {
    color: theme.palette.common.white,
    width: "100%",
    display: "block",
    transition: "color 0.3s ease-in-out",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.grey[500]
    }
  },
  navButton: {
    marginTop: theme.spacing(2)
  }
}));

export default useStyles;