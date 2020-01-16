import React from "react";
import { Box } from "@material-ui/core";

function ProductPurchaseDetails(props) {
  const { warrantyLink, productSupportLink, findADealerLink } = props;
  return (
    <Box>
      <Box>Price</Box>
      <Box>Buy Now Button</Box>
      {findADealerLink && <Box>Find a Dealer Button</Box>}
      {warrantyLink && <Box>Warranty Link</Box>}
      {productSupportLink && <Box>Support Link</Box>}
    </Box>
  );
}

export default ProductPurchaseDetails;
