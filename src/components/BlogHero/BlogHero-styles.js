import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    maxHeight: "100vh",
    minHeight: "70vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    fontSize: "2rem",
    fontWeight: theme.typography.h1.fontWeight,
    fontFamily: theme.typography.h1.fontFamily,
    lineHeight: "1.04",
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      background: "rgba(45,41,38,0.9)",
      zIndex: 0
    },
    [theme.breakpoints.up("md")]: {
      backgroundPosition: "center top",
      fontSize: "4rem",
      "&::before": {
        background:
          "linear-gradient(0deg, rgba(45,41,38,1) 15%, rgba(0,0,0,0) 100%)"
      }
    }
  },
  mainBox: {
    position: "relative",
    padding: theme.spacing(3)
  },
  metaData: {
    display: "block",
    textTransform: "uppercase",
    borderBottomStyle: "dotted",
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.common.white,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  postDate: {
    display: "inline-block"
  },
  spacer: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  featuredCategories: {
    display: "inline-block"
  },
  category: {
    marginRight: theme.spacing(1)
  },
  categoryLink: {
    color: theme.palette.common.white,
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: theme.palette.common.black
    }
  },
  articleHeadline: {
    display: "block",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: theme.palette.common.white,
    transition: "color 0.3s ease-in-out"
    // "&:hover": {
    //   color: theme.palette.common.black
    // }
  },
  articleSnippet: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    "& p": {
      marginBottom: 0
    },
    "& a": {
      color: theme.palette.common.white,
      textDecoration: "none",
      transition: "color 0.3s ease-in-out",
      "&:hover": {
        color: theme.palette.common.black
      }
    }
  },
  articleLinkBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  articleLink: {
    width: "auto",
    display: "inline-block",
    color: theme.palette.common.white,
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: theme.palette.secondary.main,
      "& > svg": {
        transform: "translate(5px, 3px)"
      }
    }
  },
  articleLinkIcon: {
    position: "relative",
    transform: "translate(0, 3px)",
    transition: "transform 0.3s ease-in-out"
  }
}));

export default useStyles;
