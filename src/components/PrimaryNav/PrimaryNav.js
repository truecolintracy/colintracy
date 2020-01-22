import React from "react";
import { Box, Typography } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContainerDimensions from "react-container-dimensions";
import Link from "../Link";
import Search from "../Search";
import useStyles from "./PrimaryNav-styles";

function PrimaryNav(props) {
	const classes = useStyles();    
	const { menu, find, search } = props;
	const [state, setState] = React.useState(false);

	return (
		<React.Fragment>
			<Box className={classes.root}>
				<ContainerDimensions>
					{({ height }) => 
						<React.Fragment>
							<Box className={classes.brandLogo}>
								<Link to="/">
									CT
								</Link>
							</Box>
							<Box className={classes.mainMenu}>
								<Box>
									{menu.map((menuItem, index) => {
										if (menuItem.submenuActive) {
											return (
												<Typography 
														component="a"
														key={index}
														underline="none"
														className={classes.mainMenuItemWithSub}
														to=""
														onClick={() => setState(!state)}
												>
														{menuItem.title}
														<ExpandMoreIcon className={`${classes.expandIcon} ${state ? classes.expandIconOpen : classes.expandIconClose}`} />
												</Typography>
											)
										} else {
											return (
												<Link
														key={index}
														to={menuItem.uri}
														className={classes.mainMenuItem}
														underline="none"
												>
														{menuItem.title}
												</Link>
											)
										}
									})}
								</Box>
								{search ? <Search inline={true} position={height + 29}/> : null}
							</Box>
							<Box className={classes.tertiaryWrapper}>
								{/* TODO: Create Shopping Cart Component */}
								{/* TODO: Create User Component */}
								{find ?
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
								: null}
							</Box>
						</React.Fragment>
					}
				</ContainerDimensions>
			</Box>        
			{/* TODO: Don't iterate over same object twice KISS!   */}
			<Box className={`${classes.subMenu} ${state ? classes.subMenuOpen : classes.subMenuClose}`}>
				{menu.map((menuItem, index) => {
					if (menuItem.submenuActive) {
						return (
							(menuItem.submenu).map((subMenuItem, subIndex) => (
								<Link
										key={subIndex}
										to={subMenuItem.uri}
										className={classes.subMenuItem}
										underline="none"
								>
										{subMenuItem.title}
								</Link>
							))
						)
					} else {
						return null
					}
				})}
			</Box>
		</React.Fragment>
	);
}

export default PrimaryNav;