import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  MobileStepper,
  Typography,
  Button,
  Container
} from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";
import useStyles from "./Carousel-styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// TODO: Update to be more dynamic with input content
function Carousel(props) {
  const classes = useStyles(); 
  const theme = useTheme();
  const { contents } = props;
  const carouselContent = contents.filter(content => content.featured === true);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = carouselContent.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.carouselContainer}>
        <FormatQuoteRoundedIcon
          color="secondary"
          className={classes.quoteTopLeft}
        />
        <FormatQuoteRoundedIcon
          color="secondary"
          className={classes.quoteBottomRight}
        />
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {carouselContent.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Typography
                  variant="body1"
                  component="div"
                  className={classes.carouselContent}
                  dangerouslySetInnerHTML={{
                    __html: step.testimonial.content
                  }}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Container>
    </Box>
  );
}

export default Carousel;