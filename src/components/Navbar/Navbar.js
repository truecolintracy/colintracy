import React from "react";
import Box from "@material-ui/core/Box";
import Link from "../Link";
import MenuIcon from "@material-ui/icons/Menu";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import OffcanvasNav from "../OffcanvasNav";
import useStyles from "./Navbar-styles";

function Navbar(props) {
    const classes = useStyles();
    const { menu, position, logo, mobileLogo, mobileHeaderColor, icons, find } = props;
    const [state, setState] = React.useState(false);
    const toggleDrawer = (open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, open });
    };
    
    return (
        <AppBar position={position} className={classes.root}>
            <Toolbar className={classes.toolBar}>
                <IconButton 
                    edge="start"
                    className={classes.menuButton}
                    color="primary" 
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Box className={classes.logo}>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </Box>
                <Box className={classes.topNav}>
                    {find &&
                        <Box>
                            <Link
                                to="/"
                                className={classes.findADealerButton}
                                color="inherit"
                                underline="none"
                            >
                                <LocationOnIcon className={classes.locationIcon} />Find A Dealer
                            </Link>
                        </Box>
                    }
                    {icons &&
                        <Box className={classes.tertiaryMenu}>
                            {icons.map((iconItem, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={iconItem.uri}
                                        className={classes.tertiaryMenuItem}
                                        color="inherit"
                                        underline="none"
                                    >
                                        {iconItem.icon}
                                    </Link>
                                )
                            })}
                        </Box>
                    }
                </Box>
            </Toolbar>
            <OffcanvasNav 
                toggleDrawer={state.open} 
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                mobileLogo={mobileLogo}
                mobileHeaderColor={mobileHeaderColor}
                menu={menu}
            />
        </AppBar>
    );
}

export default Navbar;