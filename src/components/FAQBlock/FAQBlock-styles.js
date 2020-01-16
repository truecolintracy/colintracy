import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  categoryTitle: {
    marginBottom: theme.spacing(3),
    color: theme.palette.secondary.main
  },
  faqBlock: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& a": {
      color: theme.palette.secondary.main
    }
  }
}));

export default useStyles;
