import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import theme from "../../src/theme";


// import PrimaryNav from "../../src/components/PrimaryNav";
// import Navbar from "../../src/components/Navbar";

// import PrimaryNavMenu from "../../src/nav/PrimaryNavMenu";
// import eqOriginalLogo from "../../src/assets/logos/original/equalizer-logo.svg";
// import eqWhiteLogo from "../../src/assets/logos/white/equalizer-logo.svg";

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
        {/* <Hidden mdDown>
          <PrimaryNav
            logo={eqOriginalLogo}
            menu={PrimaryNavMenu}
            find={true}
            search={true}
          />
        </Hidden> */}
        {/* <Hidden lgUp>
          <Navbar
            menu={PrimaryNavMenu}
            position="static"
            logo={eqOriginalLogo}
            mobileLogo={eqWhiteLogo}
            find={true}
            mobileHeaderColor={theme.palette.secondary.main}
          />
        </Hidden> */}
        {props.children}
        
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};

