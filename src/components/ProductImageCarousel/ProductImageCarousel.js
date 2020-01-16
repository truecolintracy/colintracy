import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./ProductImageCarousel-styles";

// TODO: Add alt to images
function ProductImageCarousel(props) {
  const classes = useStyles();
  const { primaryImage, additionalImages } = props;

  return (
    <Box className={classes.root}>
      <Box className={classes.additionalImages}>
        {additionalImages.length > 0 ? additionalImages.map((image, index) => (
          <Box className={classes.additionalImageBlock} key={index}>
            <img src={image.url} alt="" />
          </Box>
        )) : null }
      </Box>
      <Box className={classes.primaryImage}>
        <img src={primaryImage} alt="" />
      </Box>
    </Box>
  );
}

export default ProductImageCarousel;