import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import useStyles from "./BenefitsList-styles";

function BenefitsList(props) {
  const classes = useStyles();
  const { title, listItems } = props;

  
  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h3" className={classes.listTitle}>
          {title}
        </Typography>
        <Box className={classes.benefitList}>
          {listItems.map((listItem, index) => (
            <Box key={index} className={classes.listItem}>
              <Typography
                variant="h6"
                component="h6"
                className={classes.listItemHeadline}
              >
                <img
                  src={listItem.icon[0].url}
                  alt={listItem.headline}
                  className={classes.listIcon}
                />
                {listItem.headline}
              </Typography>
              <Typography
                className={classes.listItemContent}
                component="div"
                dangerouslySetInnerHTML={{
                  __html: listItem.listContent.content
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default BenefitsList;
