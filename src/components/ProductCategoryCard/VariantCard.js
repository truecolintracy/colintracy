import React from "react";
import { Box, Typography, Chip, Button } from "@material-ui/core";
import Link from "../Link";
import useStyles from "./ProductCategoryCard-styles";

function VariantCard(props) {
  const classes = useStyles();
  const { productImage, productTitle, price, sku, options, uri } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.productCategoryCard}>
        <Box className={classes.productImage}>
          <img src={productImage} alt={productTitle} />
        </Box>
        <Box className={classes.productInfo}>
          <Typography variant="h4" component="div">
            {productTitle}
          </Typography>
          <Box className={classes.productOptions}>
            {options.map((option, index) => (
              <Box key={index} className={classes.productOption}>
                <Typography variant="subtitle1" component="span" className={classes.optionName}>
                  {option.name}: {option.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Typography component="div">${price}</Typography>
        <Box className={classes.skus}>
          <Chip className={classes.skuChip} label={sku} />
        </Box>

        <Link to={uri} underline="none" className={classes.exploreLink}>
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

export default VariantCard;