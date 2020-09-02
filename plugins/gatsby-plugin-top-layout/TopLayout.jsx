/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { CssBaseline, Hidden } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../src/theme';

import PrimaryNav from '../../src/components/PrimaryNav';
import Navbar from '../../src/components/Navbar';

import PrimaryNavMenu from '../../src/nav/PrimaryNavMenu';
import colinLogo from '../../src/assets/logos/logo.svg';

export default function TopLayout(props) {
  const { children } = props; 

  return (
    <>
      <Helmet>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
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
            position='static'
            logo={colinLogo}
            mobileLogo={colinLogo}
            find={false}
            mobileHeaderColor={theme.palette.secondary.main}
          />
        </Hidden>
        {children}
      </ThemeProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
};

TopLayout.defaultProps = {
  children: ''
};

