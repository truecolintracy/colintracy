import React from "react";
import { Box, Typography, Chip, Button } from "@material-ui/core";
import Link from "../Link";
import useStyles from "./ProductCategoryCard-styles";

function ProductCard(props) {
  const classes = useStyles();
  const { productImage, productTitle, minPrice, maxPrice, skus, uri } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.productCategoryCard}>
        <Box className={classes.productImage}>
          <img src={productImage} alt={productTitle} />
        </Box>
        <Typography
          variant="h4"
          component="div"
          className={classes.productTitle}
        >
          {productTitle}
        </Typography>
        {minPrice === maxPrice ? (
          <Typography component="div">
            ${parseFloat(minPrice).toFixed(2)}
          </Typography>
        ) : (
          <Typography component="div">
            ${parseFloat(minPrice).toFixed(2)} - $
            {parseFloat(maxPrice).toFixed(2)}
          </Typography>
        )}
        <Box className={classes.skus}>
          {skus.map((sku, index) => (
            <Chip className={classes.skuChip} key={index} label={sku} />
          ))}
        </Box>

        <Link
          to={uri}
          underline="none"
          className={classes.exploreLink}
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.exploreButton}
          >
            Buy Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default ProductCard;