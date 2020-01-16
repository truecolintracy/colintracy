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
        cursor: "pointer",
    },
    searchInlineBox: {
        position: "absolute",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        width: "24px",
        willChange: "width",
        transition: "width 0.3s ease-in-out, opacity 0.2s ease-in-out",
        pointerEvents: "none",
        opacity: 0,
        right: 0,
        boxShadow: theme.shadows[2],
        padding: theme.spacing(1),
        backgroundColor: theme.palette.common.white,
    },
    searchBoxInlineOpen: {
        width: "100%",
        opacity: 1,
        pointerEvents: "auto"
    },
    closeSearch: {
        position: "relative",
        margin: "0 0 0 auto",
        cursor: "pointer"
    },
    searchInput: {
        width: "100%",
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1)
    },
    searchDropdownBox: {
        position: "fixed",
        width: "100%",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        borderBottomStyle: "solid",
        transform: "translateY(0)",
        willChange: "transform",
        transition: "transform 0.3s ease-in-out",
        top: 0,
        left: 0,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.common.white,
        borderBottomColor: theme.palette.primary.light,
        borderBottomWidth: 1,
    },
    searchBoxDropdownClose: {
        pointerEvents: "none",
        transition: "z-index 0.5s step-start, transform 0.3s linear",
        zIndex: -1
    },
    searchBoxDropdownOpen: {
        pointerEvents: "auto",
        transition: "z-index 0.5s step-end, transform 0.3s linear",
        zIndex: 0
    }
}));

export default useStyles;