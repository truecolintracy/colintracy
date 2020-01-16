import React from "react";
import { Box, Typography } from "@material-ui/core";
import Link from "../Link";
import useStyles from "./BlogCategories-styles";

function BlogCategories(props) {
  const classes = useStyles();
  const { categories } = props;
  return (
    <Box className={classes.root}>
      <Typography component="div" className={classes.categoryLinkBox}>
        <Link className={classes.categoryLink} underline="none" to="/blog">
          All
        </Link>
      </Typography>
      {categories.map((category, index) => (
        <Typography
          component="div"
          key={index}
          className={classes.categoryLinkBox}
        >
          <Link
            className={classes.categoryLink}
            underline="none"
            to={`/blog/${category.slug}`}
            activeClassName="active"
          >
            {category.title}
          </Link>
        </Typography>
      ))}
    </Box>
  );
}

export default BlogCategories;
