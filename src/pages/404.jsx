import React from "react";
import { Box, Typography } from "@material-ui/core";
import SEO from "../components/SEO";

export default function NotFoundPage() {

  return (
    <Box>
      <SEO title="404: Page Not Found" />
      <Box>
        <Typography variant="h1" component="h1">Not Found</Typography>
        <Typography variant="body1">You did it, you son of a bitch you really did it! You found the page that shall not be found.</Typography>
      </Box>
    </Box>
  );
}