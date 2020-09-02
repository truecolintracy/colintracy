import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import Link from '../Link';
import useStyles from './PrimaryMobileNavMenu.styles';

const PrimaryMobileNavMenu = (props) => {
	const classes = useStyles();
	const { menu, mobileLogo, mobileHeaderColor, onClick, onKeyDown } = props;

	return (
		<Box
			component='div'
			className={classes.list}
			role='presentation'
			onClick={onClick}
			onKeyDown={onKeyDown}
		>
			<Box className={classes.mobileNavHeader} style={{ backgroundColor: mobileHeaderColor }}>
				<Link to='/'>
					<img src={mobileLogo} alt='' />
				</Link>
			</Box>
			<List>
				{menu.map((menuItem) => {
          return (      
            <ListItem button key={menuItem.title}>
              <ListItemText className={classes.menuItem}>
                <Link to={menuItem.uri} underline="none">
                  {menuItem.title}
                </Link>
              </ListItemText>
            </ListItem>
          );
				})}
			</List>
		</Box>
	)}

export default PrimaryMobileNavMenu;