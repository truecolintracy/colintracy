import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Link from '../Link';
import useStyles from './PrimaryNav.styles';

function PrimaryNav(props) {
	const classes = useStyles();    
	const { menu } = props;
	const [state, setState] = React.useState(false);

	return (
		<>
			<Box className={classes.root}>
				<Box className={classes.brandLogo}>
					<Link to='/' underline='none'>
						CT
					</Link>
				</Box>
				<Box className={classes.mainMenu}>
					<Box>
						{menu.map((menuItem) => {
							return (
								<Typography 
									component='a'
									key={menuItem.title}
									underline='none'
									className={classes.mainMenuItemWithSub}
									to=''
									onClick={() => setState(!state)}
								>
									{menuItem.title}
								</Typography>
							)
						})}
					</Box>
				</Box>
			</Box>
		</>
	);
}

export default PrimaryNav;