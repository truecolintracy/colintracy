import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./ProductDetails-styles";

function ProductDetails(props) {
  const classes = useStyles();
  const { productTitle, productDescription } = props;

  return (
    <Box className={classes.root}>
      <Typography variant="h1" component="h3" className={classes.productTitle}>
        {productTitle}
      </Typography>
      <Typography variant="subtitle1" component="span">
        SKU
      </Typography>
      <Typography
        variant="body1"
        component="div"
        className={classes.productDetails}
      >
        {productDescription}
      </Typography>
      <Box>
        <Box>Read More</Box>
        <Box>Videos</Box>
        <Box>Specifications</Box>
        <Box>Reviews</Box>
      </Box>
    </Box>
  );
}

export default ProductDetails;
