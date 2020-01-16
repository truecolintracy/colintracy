import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  listItem: {
    fontWeight: 800,
    fontSize: 18,
    transition: "color 0.3s ease-in-out",
    cursor: "pointer",
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
}));

export default useStyles;
