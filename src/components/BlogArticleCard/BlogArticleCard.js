import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { format } from "date-fns";
import Link from "../Link";
import useStyles from "./BlogArticleCard-styles";

function BlogCategories(props) {
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
    <Box className={classes.root}>
      <Box
        className={classes.articleBox}
        style={{ backgroundImage: `url(${articleImage})` }}
      >
        <Box className={classes.infoBox}>
          <Box className={classes.metaData}>
            <Typography
              variant="subheading2"
              component="span"
              className={classes.postDate}
            >
              {postDate}
            </Typography>
            <Typography
              variant="subheading2"
              component="span"
              className={classes.spacer}
            >
              --
            </Typography>
            <Box className={classes.featuredCategories}>
              {articleCategory.map((category, index) => (
                <Typography
                  className={classes.category}
                  variant="subheading2"
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
          <Typography variant="h6">{articleHeadline}</Typography>
          <Box>
            <Typography
              component="div"
              variant="body2"
              className={classes.articleSnippet}
              dangerouslySetInnerHTML={{
                __html: `${articleSnippet.substring(0, 100)}...`
              }}
            />
            <Link to={`/blog/${articleUri}`} color="inherit" underline="none">
              <Button color="inherit" className={classes.readMoreButton}>
                READ ARTICLE
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogCategories;
