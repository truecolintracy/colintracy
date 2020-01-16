import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    minHeight: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "75% bottom",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "80%",
      background:
        "linear-gradient(90deg, rgba(45,41,38,0.8) 0%, rgba(0,0,0,0) 100%)",
      zIndex: 0
    },
    [theme.breakpoints.up("md")]: {
      backgroundPosition: "center bottom"
    }
  },
  mainBox: {
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      maxWidth: "60%"
    }
  },
  ctaButtonLink: {
    textDecoration: "none",
    display: "block",
    marginTop: theme.spacing(3)
  },
  ctaButton: {
    fontWeight: "bold",
    color: theme.palette.common.white,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    transition: "all 0.3s ease-in-out"
  },
  ctaButtonPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    }
  },
  ctaButtonSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    }
  },
  ctaButtonWhite: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    "&:hover": {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    }
  },
  ctaButtonBlack: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black
    }
  },
  ctaButtonRounded: {
    borderRadius: "50%"
  }
}));

export default useStyles;