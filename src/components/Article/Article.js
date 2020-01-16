import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import useStyles from "./Article-styles";

function Article(props) {
  const classes = useStyles();
  const { articleBody } = props;

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box className={classes.mainBox}>
        <Typography
          variant="body1"
          component="div"
          className={classes.postDate}
          dangerouslySetInnerHTML={{ __html: articleBody }}
        />            
      </Box>
    </Container>
  );
}

export default Article;