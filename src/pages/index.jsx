import React from "react";
// import { graphql } from "gatsby";
import { Box, Typography } from "@material-ui/core";
import SEO from "../components/SEO";

export default function Index() {
  return (
    <Box>
      <SEO title="Home" />
      <Box>
        <Typography>Hello THere</Typography>
      </Box>
    </Box>
  )
}

// export const query = graphql`
//   query HomePage {
//   }
// `;