import React from "react";
import {
  Box,
  List,
  Divider,
  ListItem,
  Typography,
  ListItemText,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "../../components/Link";
import useStyles from "./PrimaryMobileNavMenu-styles";

const PrimaryMobileNavMenu = (props) => {
	const classes = useStyles();
	const { menu, mobileLogo, mobileHeaderColor} = props;
	let onClick = props.onClick;
	let onKeyDown = props.onKeyDown;

	return (
		<Box
			component="div"
			className={classes.list}
			role="presentation"
			onClick={onClick}
			onKeyDown={onKeyDown}
		>
			<Box className={classes.mobileNavHeader} style={{ backgroundColor: mobileHeaderColor }}>
				<Link to="/">
					<img src={mobileLogo} alt="" />
				</Link>
			</Box>
			<List>
				{menu.map((menuItem, index) => {
					if (menuItem.submenuActive) {
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
                    aria-controls="more-content"
                    id={`${menuItem.title}_${index}`}
                  >
                    <Box>
                      <Typography component="div">{menuItem.title}</Typography>
                    </Box>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    className={classes.expansionPanelLinks}
                  >
                    {menuItem.submenu.map((subMenuItem, subIndex) => (
                      <ListItem button key={subIndex}>
                        <ListItemText className={classes.menuItem}>
                          <Link to={subMenuItem.uri} underline="none">
                            {subMenuItem.title}
                          </Link>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </ListItem>
            );
					} else {
						return (
							<ListItem button key={index}>
								<ListItemText className={classes.menuItem}>
									<Link to={menuItem.uri} underline="none">
										{menuItem.title}
									</Link>
								</ListItemText>
							</ListItem>
						)
					}
				})}
			</List>
			<Divider />
			<List>
				{[{title: "Contact Us", uri: "/"}, {title: "Warranty Registration", uri: "/"}].map((menuItem, index) => (
					<ListItem button key={index}>
						<ListItemText className={classes.menuItem}>
							<Link to={menuItem.uri} underline="none">{menuItem.title}</Link>
						</ListItemText>
					</ListItem>
				))}
			</List>
		</Box>
	)}

export default PrimaryMobileNavMenu;