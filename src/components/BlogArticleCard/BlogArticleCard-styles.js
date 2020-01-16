import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25%"
    }
  },
  articleBox: {
    display: "flex",
    alignItems: "flex-end",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderRadius: theme.spacing(1),
    overflow: "hidden",
    minHeight: theme.spacing(50),
    position: "relative",
    "&::before": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: 0,
      background:
        "linear-gradient(0deg, rgba(45,41,38,1) 15%, rgba(0,0,0,0) 100%)"
    },
    "&::after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      transform: "translateY(100%)",
      transition: "transform 0.4s ease-in-out"
    },
    "&:hover": {
      cursor: "pointer",
      "&::after": {
        transform: "translateY(0)"
      }
    }
  },
  infoBox: {
    position: "relative",
    zIndex: 1,
    color: theme.palette.common.white
  },
  metaData: {
    display: "block",
    textTransform: "uppercase",
    borderBottomStyle: "dotted",
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.common.white,
    marginBottom: theme.spacing(1)
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
  articleSnippet: {
    "& > p": {
      padding: 0,
      margin: 0,
      "& a": {
        color: theme.palette.common.white
      }
    }
  },
  readMoreButton: {
    display: "flex",
    marginLeft: "auto"
  }
}));

export default useStyles;