import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    justifyContent: "center",
    maxWidth: 960,
    margin: "0 auto",
    marginTop: theme.spacing(10)
  },
  yearBox: {
    borderColor: theme.palette.secondary.main,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "inline-block",
    marginBottom: theme.spacing(-2),
    marginTop: theme.spacing(2),
    position: "relative",
    zIndex: 2,
    backgroundColor: theme.palette.common.white
  },
  historyImage: {
    borderRadius: theme.spacing(1),
    overflow: "hidden",
    display: "block",
    "& img": {
      maxWidth: "100%",
      display: "block",
      margin: "0 auto"
    }
  }
}));

export default useStyles;
