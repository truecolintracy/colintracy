import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PrimaryMobileNavMenu from '../PrimaryMobileNavMenu';

function OffcanvasNav(props) {
  const { menu, toggleDrawer = false, mobileLogo, mobileHeaderColor, onOpen, onClose } = props;
  
  return (
    <>
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
    </>
  );
}

export default OffcanvasNav;