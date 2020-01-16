import React from "react";
import { Box, List, ListItem, Typography } from "@material-ui/core";
import useStyles from "./TableOfContents-styles";

function TableOfContents(props) {
  const classes = useStyles();
  const { nav } = props;

  return (
    <Box className={classes.root}>
      <List dense={true}>
        {nav.map((navItem, index) => (
          <ListItem key={index}>
            <Typography
              component="a"
              href={`#${navItem.title
                .toLowerCase()
                .replace(/&/g, "")
                .replace(/\s/g, "")}`}
              className={classes.listItem}
            >
              {navItem.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TableOfContents;
