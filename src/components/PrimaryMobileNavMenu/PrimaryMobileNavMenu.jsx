import React from 'react';
import {
  Box,
  List,
  ListItem,
  Typography,
  ListItemText,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
				{menu.map((menuItem, index) => {
          return (
            <ListItem button key={index}>
              <ExpansionPanel
                onChange={e => e.stopPropagation()}
                className={classes.expansionPanel}
              >
                <ExpansionPanelSummary
                  className={classes.expansionPanelSummary}
                  expandIcon={
                    <ExpandMoreIcon className={classes.expansionPanelIcon} />
                  }
                  aria-controls='more-content'
                  id={`${menuItem.title}_${index}`}
                >
                  <Box>
                    <Typography component='div'>{menuItem.title}</Typography>
                  </Box>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  className={classes.expansionPanelLinks}
                >
                  {menuItem.submenu.map((subMenuItem, subIndex) => (
                    <ListItem button key={subIndex}>
                      <ListItemText className={classes.menuItem}>
                        <Link to={subMenuItem.uri} underline='none'>
                          {subMenuItem.title}
                        </Link>
                      </ListItemText>
                    </ListItem>
                  ))}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </ListItem>
          );
				})}
			</List>
		</Box>
	)}

export default PrimaryMobileNavMenu;