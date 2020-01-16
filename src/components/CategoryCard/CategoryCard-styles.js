import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      width: "50%",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    [theme.breakpoints.up("lg")]: {
      width: "33.33%"
    }
  },
  exploreButton: {
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white
    }
  },
  categoryCard: {
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    borderColor: theme.palette.grey[400],
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    textAlign: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
      borderColor: theme.palette.secondary.main
    }
  },
  categoryTitle: {
    minHeight: theme.spacing(10)
  },
  categoryDescription: {
    minHeight: 150
  },
  categoryImage: {
    maxWidth: "100%",
    marginTop: theme.spacing(10),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: 250,
    maxHeight: 250,
    "& img": {
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }
}));

export default useStyles;