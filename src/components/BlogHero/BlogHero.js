import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { format } from "date-fns";
import Link from "../../components/Link";
import useStyles from "./BlogHero-styles";

function BlogHero(props) {
  const classes = useStyles();
  const {
    articleImage,
    articleDate,
    articleCategory,
    articleHeadline,
    articleSnippet,
    articleUri
  } = props;

  const postDate = format(new Date(articleDate * 1000), "MMM d, yyyy");
  const categoryLength = articleCategory.length;
  return (
    <Box
      className={classes.root}
      style={{ backgroundImage: `url(${articleImage})` }}
    >
      <Container maxWidth="lg">
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
          <Link to="/" underline="none" className={classes.articleHeadline}>
            {articleHeadline}
          </Link>
          <Box className={classes.articleSnippetBox}>
            <Typography
              component="div"
              className={classes.articleSnippet}
              dangerouslySetInnerHTML={{
                __html: `${articleSnippet.split("\n")[0]}`
              }}
            />
            <Box className={classes.articleLinkBox}>
              <Link
                variant="h5"
                to={`/blog/${articleUri}`}
                underline="none"
                className={classes.articleLink}
              >
                READ MORE
                <DoubleArrowIcon className={classes.articleLinkIcon} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default BlogHero;