import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./Search-styles";

function Search(props) {
    const classes = useStyles();
    const { inline, position } = props;
    const [state, setState] = React.useState(false);
    const onClick = (open) => event => {
        setState({ ...state, open })
    }

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <SearchIcon onClick={onClick(true)} />
            </Box>
            {inline ?
                <Box className={`${classes.searchInlineBox} ${state.open ? classes.searchBoxInlineOpen : ""}`}>
                    <SearchIcon />
                    <TextField className={classes.searchInput} placeholder="Search entire site"></TextField>
                    <CloseIcon onClick={onClick(false)} className={classes.closeSearch} />
                </Box>
            : 
                <Box style={state.open ? { transform: `translateY(${position}px)` } : {}} className={`${classes.searchDropdownBox} ${state.open ? classes.searchBoxDropdownOpen : classes.searchBoxDropdownClose}`}>
                    <SearchIcon />
                    <TextField className={classes.searchInput} placeholder="Search entire site"></TextField>
                    <CloseIcon onClick={onClick(false)} className={classes.closeSearch} />
                </Box>
        }
            
        </React.Fragment>
    );
}

export default Search;