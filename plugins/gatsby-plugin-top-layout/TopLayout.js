import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import theme from "../../src/theme";

import PrimaryNav from "../../src/components/PrimaryNav";
import Navbar from "../../src/components/Navbar";

import PrimaryNavMenu from "../../src/nav/PrimaryNavMenu";
import colinLogo from "../../src/assets/logos/logo.svg";

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hidden mdDown>
          <PrimaryNav
            menu={PrimaryNavMenu}
            find={false}
            search={false}
          />
        </Hidden>
        <Hidden lgUp>
          <Navbar
            menu={PrimaryNavMenu}
            position="static"
            logo={colinLogo}
            mobileLogo={colinLogo}
            find={false}
            mobileHeaderColor={theme.palette.secondary.main}
          />
        </Hidden>
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
};

