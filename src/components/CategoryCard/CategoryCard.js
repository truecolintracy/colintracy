import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import Link from "../Link";
import useStyles from "./CategoryCard-styles";

function CategoryCard(props) {
  const classes = useStyles();
  const { title, image, description, uri } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.categoryCard}>
        <Typography variant="h4" component="div" className={classes.categoryTitle}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          className={classes.categoryDescription}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link to={`/store/${uri}`} underline="none">
          <Button variant="outlined" className={classes.exploreButton}>Explore More</Button>
        </Link>
        <Box className={classes.categoryImage}>
          <img src={image} alt={title} />
        </Box>
      </Box>
    </Box>
  );
}

export default CategoryCard;