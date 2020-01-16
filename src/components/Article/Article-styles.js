import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  mainBox: {
    position: "relative",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    marginBottom: theme.spacing(4),
    color: theme.palette.common.black,
    opacity: 0.75,
    "& a": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.grey[500]
      }
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  }
}));

export default useStyles;
