import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    maxHeight: "60vh",
    minHeight: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignContent: "center",
    alignItems: "flex-end",
    color: theme.palette.common.white,
    fontSize: "2rem",
    fontWeight: theme.typography.h1.fontWeight,
    fontFamily: theme.typography.h1.fontFamily,
    lineHeight: "1.04",
    paddingLeft: 0,
    paddingRight: 0,
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
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      "&::before": {
        background:
          "linear-gradient(0deg, rgba(45,41,38,1) 15%, rgba(0,0,0,0) 100%)"
      }
    }
  },
  containerBox: {
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  mainBox: {
    position: "relative",
    padding: theme.spacing(3),
    backgroundColor: `${theme.palette.secondary.main}B3`,
    boxShadow: theme.shadows[2],
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2)
    }
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
  },
  authorBox: {
    maxWidth: theme.spacing(25),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: theme.palette.common.white,
    borderBottomColor: theme.palette.common.white,
    borderTopStyle: "dotted",
    borderBottomStyle: "dotted",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    "& > div": {
      paddingLeft: theme.spacing(1)
    }
  }
}));

export default useStyles;
