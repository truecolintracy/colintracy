import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  listTitle: {
    marginBottom: theme.spacing(6),
    display: "block",
    textAlign: "center"
  },
  benefitList: {
    display: "flex",
    flexWrap: "wrap"
  },
  listItem: {
    width: "100%",
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      width: "33.333%",
      padding: theme.spacing(2)
    }
  },
  listItemHeadline: {
    color: theme.palette.secondary.dark
  },
  listIcon: {
    marginRight: theme.spacing(1),
    position: "relative",
    top: 2
  },
  listItemContent: {}
}));

export default useStyles;
