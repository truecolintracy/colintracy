import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "auto",
    marginRight: theme.spacing(1),
    position: "relative",
    cursor: "pointer"
  },
}));

export default useStyles;
