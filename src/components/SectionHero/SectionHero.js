import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./SectionHero-styles";

function SectionHero(props) {
  const classes = useStyles();
  const { title, graphic, content, heroImage, contentLocation } = props;

  return (
    <Box
      className={classes.root}
      style={{
        backgroundImage: `url(${heroImage[0].url})`,
        textAlign: contentLocation
      }}
    >
      <Box className={classes.heroContent}>
        <Typography variant="h3" component="h3" className={classes.heroTitle}>
          {title}
        </Typography>
        {graphic && (
          <Box className={classes.heroGraphic}>
            <img src={graphic[0].url} alt="" />
          </Box>
        )}
        <Typography
          variant="body1"
          component="div"
          className={classes.primaryHeroContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Box>
    </Box>
  );
}

export default SectionHero;
