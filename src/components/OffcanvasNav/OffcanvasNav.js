import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import PrimaryMobileNavMenu from "../PrimaryMobileNavMenu";

function OffcanvasNav(props) {
    const { menu, toggleDrawer = false, mobileLogo, mobileHeaderColor } = props;
    let onOpen = props.onOpen;
    let onClose = props.onClose;

    return (
        <React.Fragment>
            <SwipeableDrawer
                open={toggleDrawer}
                onClose={onClose}
                onOpen={onOpen}
            >
                <PrimaryMobileNavMenu
                    onClick={onClose}
                    onKeyDown={onClose}
                    mobileLogo={mobileLogo}
                    mobileHeaderColor={mobileHeaderColor}
                    menu={menu}
                />
            </SwipeableDrawer>
        </React.Fragment>
    );
}

export default OffcanvasNav;