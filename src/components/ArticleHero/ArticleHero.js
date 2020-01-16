import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { format } from "date-fns";
import Link from "../Link";
import useStyles from "./ArticleHero-styles";

function ArticleHero(props) {
  const classes = useStyles();
  const {
    articleImage,
    articleDate,
    articleCategory,
    articleHeadline,
    articleAuthor,
    articleAuthorPosition
  } = props;

  const postDate = format(new Date(articleDate * 1000), "MMM d, yyyy");
  const categoryLength = articleCategory.length;
  return (
    <Box
      className={classes.root}
      style={{ backgroundImage: `url(${articleImage})` }}
    >
      <Container maxWidth="lg" className={classes.containerBox}>
        <Box className={classes.mainBox}>
          <Box className={classes.metaData}>
            <Typography
              variant="h6"
              component="span"
              className={classes.postDate}
            >
              {postDate}
            </Typography>
            <Typography
              variant="h6"
              component="span"
              className={classes.spacer}
            >
              --
            </Typography>
            <Box className={classes.featuredCategories}>
              {articleCategory.map((category, index) => (
                <Typography
                  className={classes.category}
                  variant="h6"
                  component="span"
                  key={index}
                >
                  <Link
                    to={`/blog/category/${category.title}`}
                    underline="none"
                    className={classes.categoryLink}
                  >
                    {category.title}
                  </Link>
                  <Box component="span">
                    {categoryLength === index + 1 ? "" : ", "}
                  </Box>
                </Typography>
              ))}
            </Box>
          </Box>
          <Typography
            component="div"
            variant="h2"
            className={classes.articleHeadline}
          >
            {articleHeadline}
          </Typography>
          <Box className={classes.authorBox}>
            <Typography variant="body1" component="div">
              {articleAuthor}
            </Typography>
            <Typography variant="h6" component="div">
              {articleAuthorPosition}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ArticleHero;