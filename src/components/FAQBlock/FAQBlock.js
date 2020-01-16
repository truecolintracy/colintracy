import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./FAQBlock-styles";

function FAQBlock(props) {
  const classes = useStyles();
  const { category, faqs } = props;

  return (
    <Box className={classes.root}>
      <Typography
        id={category
          .toLowerCase()
          .replace(/&/g, "")
          .replace(/\s/g, "")}
        variant="h3"
        component="h3"
        className={classes.categoryTitle}
      >
        {category}
      </Typography>
      {faqs.map((faq, index) => {
        if (faq.faqCategory[0].title === category) {
          return (
            <Box className={classes.faqBlock}>
              <Typography variant="h6" component="h6">
                {faq.question}
              </Typography>
              <Typography
                component="div"
                dangerouslySetInnerHTML={{ __html: faq.answer.content }}
              />
            </Box>
          );
        } else {
          return null;
        }
      })}
    </Box>
  );
}

export default FAQBlock;
