import React from "react";
import { Box, Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import useStyles from "./RevealHistoryObject-styles";

function RevealHistoryObject(props) {
  const classes = useStyles();
  const { year, image, headline, content } = props;

  return (
    <Fade bottom>
      <Box className={classes.root}>
        <Box className={classes.yearBox} boxShadow={1}>
          <Typography variant="h4" component="h6">
            {year}
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <Box className={classes.historyImage}>
            <img src={image} alt={headline} />
          </Box>
          <Typography component="div" variant="body1">
            {headline}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Box>
      </Box>
    </Fade>
  );
}

export default RevealHistoryObject;