import React from "react";
import Box from "@material-ui/core/Box";
import Link from "../Link";
import MuiLink from "@material-ui/core/Link";
import useStyles from "./SecondaryTopNav-styles";

function SecondaryTopNav(props) {
    const classes = useStyles();
    const { menu } = props;
    
    return (
        <Box className={classes.root}>
            {menu.map((menuItem, index) => {
                if (menuItem.externalLink === true) {
                    return (
                        <MuiLink 
                            key={index} 
                            underline="none" 
                            color="inherit" 
                            href={menuItem.uri} 
                            className={menuItem.socialLink ? classes.secondaryNavLinkSocial : classes.secondaryNavLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {menuItem.title}
                        </MuiLink>
                    )
                } else {
                    return (
                        <Link key={index} underline="none" color="inherit" to={menuItem.uri} className={classes.secondaryNavLink}>
                            {menuItem.title}
                        </Link>
                    )                    
                }
            })}
        </Box>
    );
}

export default SecondaryTopNav;