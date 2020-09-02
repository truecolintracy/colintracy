import React from 'react';
import { Box, Fab } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './ConnectFab.styles';

function ConnectFab() {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
      <a href='https://github.com/truecolintracy'>
        <Fab color='primary' aria-label='github'>
          <GitHubIcon fontSize='large' />
        </Fab>
      </a>
    </Box>
	);
}

export default ConnectFab;
