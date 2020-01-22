import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "flex-start",
        paddingRight: 0,
        paddingLeft: theme.spacing(1),
        position: "relative",
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        boxShadow: theme.shadows[1],
        zIndex: 2
    },
    mainMenu: {
        display: "flex",
        position: "relative",
        alignItems: "center",
        flexGrow: 1,
    },
    mainMenuItem: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        transition: "color 0.3s ease-in-out",
        fontSize: "18px",
        "&:hover": {
            color: theme.palette.secondary.main
        }
    },
    mainMenuItemWithSub: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        transition: "color 0.3s ease-in-out",
        fontSize: "21px",
        "&:hover": {
            color: theme.palette.secondary.main,
            cursor: "pointer"
        }
    },
    expandIcon: {
        position: "relative",
        top: theme.spacing(0.75),
        left: theme.spacing(0.5),
        willChange: "transform",
        transition: "transform 0.3s ease-in-out"
    },
    expandIconOpen: {
        transform: "rotate(180deg)"
    },
    expandIconClose: {
        transform: "rotate(0deg)"
    },
    brandLogo: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        overflow: "hidden",
        width: "140px",
        marginRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "& a": {
            width: 50,
            height: 50,
            display: "flex",
            borderColor: theme.palette.primary.dark,
            borderWidth: 2,
            borderRadius: "50%",
            borderStyle: "solid",
            justifyContent: "center",
            alignItems: "center",
            fontSize: theme.spacing(2),
            color: theme.palette.primary.dark
        },
    },
    tertiaryWrapper: {
        display: "flex",
        position: "relative",
        margin: "0 0 0 auto"
    },
    tertiaryMenu: {
        display: "flex",
        alignItems: "top",
        transition: "color 0.3s ease-in-out",
        color: theme.palette.primary.light,
        "&:hover": {
            color: theme.palette.secondary.main
        }
    },
    findADealerButton: {
        display: "flex",
        alignItems: "center",
        minHeight: "100%",
        textTransform: "uppercase",
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        marginLeft: theme.spacing(2),
        fontSize: "21px",
        transition: "background-color 0.3s ease-in-out",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        }
    },
    locationIcon: {
        marginRight: theme.spacing(1)
    },
    subMenu: {
        top: 0,
        display: "flex",
        position: "absolute",
        alignItems: "center",
        flexGrow: 1,
        paddingLeft: theme.spacing(20),
        backgroundColor: theme.palette.grey[100],
        boxShadow: theme.shadows[1],
        zIndex: 1,
        willChange: "transform",
        transition: "transform 0.3s ease-in-out",
        width: "100%"
    },
    subMenuOpen: {
        transform: "translateY(101px)"
    },
    subMenuClose: {
        transform: "translateY(-10px)"
    },
    subMenuItem: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        transition: "color 0.3s ease-in-out",
        fontSize: "21px",
        "&:hover": {
            color: theme.palette.secondary.main
        }
    }
}));

export default useStyles;