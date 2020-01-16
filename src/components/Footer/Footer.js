import React from "react";
import { Box, Container, Typography, Button } from "@material-ui/core";
import Link from "../Link";
import useStyles from "./Footer-styles";


function Navbar(props) {
    const classes = useStyles();
    const { background, logo, socialMenu, menu } = props;
    
    return (
      <Box
        className={classes.root}
        style={{ backgroundColor: `${background}` }}
      >
        <Container maxWidth="md" className={classes.footerContainer}>
          <Box className={classes.column}>
            <Box className={classes.logoBox}>
              <img src={logo} alt="" />
            </Box>
            <Box className={classes.socialLinks}>
              {socialMenu.map((menuItem, index) => (
                <Box className={classes.socialBox} key={index}>
                  <a
                    className={classes.socialLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={menuItem.uri}
                  >
                    {menuItem.title}
                  </a>
                </Box>
              ))}
            </Box>
          </Box>
          {menu.map((menuItem, index) => (
            <Box className={classes.column} key={index}>
                <Typography component="div" className={classes.navHeading}>{menuItem.title}</Typography>
                <Box className={classes.navMenuBox}>
                    {menuItem.submenu.map((subMenuItem, subIndex) => {
                        if (subMenuItem.button) {
                          return (
                            <Button 
                              size="large" 
                              color="secondary" 
                              variant="contained"
                              className={classes.navButton} 
                              to={subMenuItem.uri}
                              fullWidth
                              key={subIndex}
                          >
                              {subMenuItem.title}
                            </Button>
                          );
                        } else if (subMenuItem.externalLink) {
                          return (
                            <a
                              className={classes.navMenuItemLink}
                              href={subMenuItem.uri}
                              key={subIndex}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {subMenuItem.title}
                            </a>
                          );
                        } else {
                          return (
                            <Link
                              className={classes.navMenuItemLink}
                              to={subMenuItem.uri}
                              underline="none"
                              key={subIndex}
                            >
                              {subMenuItem.title}
                            </Link>
                          );
                        }
                    })}
                </Box>
            </Box>
          ))}
        </Container>
      </Box>
    );
}

export default Navbar;