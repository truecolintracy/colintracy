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
  exploreLink: {
    display: "block",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  exploreButton: {
    transition: "all 0.3s ease-in-out",
    width: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    }
  },
  productCategoryCard: {
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
  productTitle: {
    position: "relative",
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "&::after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: 200,
      marginLeft: -100,
      height: 2,
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    }
  },
  productInfo: {
    position: "relative",
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "&::after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: 200,
      marginLeft: -100,
      height: 2,
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    }
  },
  productOptions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  productOption: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  },
  optionName: {
    fontWeight: "bold"
  },
  productImage: {
    maxWidth: "100%",
    marginTop: theme.spacing(2),
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
  },
  skus: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  skuChip: {
    marginLeft: theme.spacing(0.25),
    marginRight: theme.spacing(0.25),
    marginTop: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5)
  }
}));

export default useStyles;