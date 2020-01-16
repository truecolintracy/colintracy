import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import Link from "../Link";
import useStyles from "./HalfContentBlock-styles";

// TODO: Make this much better!
function HalfContentBlock(props) {
  const classes = useStyles();
  const { blocks } = props;
  
  return (
    <Box className={classes.root}>
      {blocks.map((block, index) => {
        let backgroundImage = block.backgroundImage ? block.backgroundImage.length > 0 ? block.backgroundImage[0].url : "" : "";
        let backgroundColor = block.backgroundColor.hex;
        let headline = block.headline;
        let content = block.blockContent;
        let link = block.callToActionLink;
        let linkContent = block.callToActionContent;
        let linkColor = block.callToActionButtonBackgroundColor;
        let position = block.position;
        let transparent = block.backgroundTransparency ? "BF" : "FF";
        let isGraphic = block.graphic ? true : false;
        let graphic = block.graphic ? block.graphic : "";
        let graphicOverlay = block.graphicOverlay ? block.graphicOverlay : "";

        if (isGraphic) {
          return (
            <Box
              key={index}
              className={classes.block}
              style={{ backgroundColor: backgroundColor }}
            >
              <img src={graphicOverlay[0].url} alt="" className={classes.graphicOverlay} />
              <img src={graphic[0].url} alt="" className={classes.graphic} />
            </Box>
          );
        } else {
          return (
            <React.Fragment key={index}>
              <Box className={classes.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})`}}></Box>
              <Box
                className={`${classes.block} ${
                  position === "right"
                    ? classes.boxPositionRight
                    : classes.boxPositionLeft
                }`}
                style={{
                  backgroundColor: backgroundColor
                    ? backgroundColor + transparent
                    : "transparent"
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headline}
                >
                  {headline ? headline : null}
                </Typography>
                <Typography
                  className={classes.content}
                  variant="body1"
                  component="div"
                  dangerouslySetInnerHTML={{
                    __html: `${content ? content : null}`
                  }}
                />
                {linkContent && (
                  <Link to={link} underline="none">
                    <Button
                      className={classes.ctaButton}
                      variant="contained"
                      color={linkColor}
                      size="large"
                    >
                      {linkContent}
                    </Button>
                  </Link>
                )}
              </Box>
            </React.Fragment>
          );
        }
      })}
    </Box>
  );
}

export default HalfContentBlock;