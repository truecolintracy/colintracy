import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    maxWidth: "100%",
    justifyContent: "flex-start",
    overflow: "scroll",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      justifyContent: "center"
    }
  },
  categoryLinkBox: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  categoryLink: {
    display: "block",
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    transition: "background-color 0.3s ease-in-out",
    textAlign: "center",
    minWidth: theme.spacing(16.25), // HACK FIX
    "&:hover": {
      backgroundColor: theme.palette.grey[300]
    },
    "&.active": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white
    },
    [theme.breakpoints.up("md")]: {
      minWidth: 0
    }
  }
}));

export default useStyles;