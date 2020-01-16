import React from "react";
import { Link } from "gatsby";
import { Box, Container, Typography, Button } from "@material-ui/core";
import useStyles from "./Hero-styles";

function Hero(props) {
  const classes = useStyles();
  const {
    backgroundImage,
    backgroundColor,
    justify,
    headline,
    text,
    buttonText,
    buttonColor,
    buttonType,
    buttonUri,
    maxHeight,
    largeHero
  } = props;

  let justifyContent;
  if (justify === "right") {
    justifyContent = "flex-end";
  } else if (justify === "center") {
    justifyContent = "center";
  } else {
    justifyContent = "flex-start";
  }

  return (
    <Box
      className={classes.root}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: backgroundColor,
        minHeight: largeHero ? "80vh" : maxHeight ? `${maxHeight}px` : "auto",
        height: maxHeight ? `${maxHeight}px` : "auto"
      }}
    >
      <Container maxWidth="lg" style={{ justifyContent: `${justifyContent}` }}>
        <Box className={classes.mainBox}>
          <Typography variant="h3" component="h3">
            {headline}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: text }}
          />
          {buttonUri && (
            <Link to={buttonUri} className={classes.ctaButtonLink}>
              <Button
                className={`${classes.ctaButton} ${
                  buttonColor === "primary"
                    ? classes.ctaButtonPrimary
                    : buttonColor === "secondary"
                    ? classes.ctaButtonSecondary
                    : buttonColor === "white"
                    ? classes.ctaButtonWhite
                    : classes.ctaButtonBlack
                } ${buttonType === "rounded" ? classes.ctaButtonRounded : ""}`}
                size="large"
              >
                {buttonText}
              </Button>
            </Link>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
