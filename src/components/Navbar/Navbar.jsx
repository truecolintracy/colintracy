import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Link from '../Link';
import OffcanvasNav from '../OffcanvasNav';
import useStyles from './Navbar.styles';

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
          edge='start'
          className={classes.menuButton}
          color='primary' 
          aria-label='menu'
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box className={classes.logo}>
          <Link to='/'>
            <Typography variant='h5'>Colin Tracy</Typography>
          </Link>
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