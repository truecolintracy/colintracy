module.exports = {
  plugins: [
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Public Sans`, // Headings - H1, H2, H3, H4, H5, H6
            variants: [`300`, `700`, `800`],
          },
          {
            family: `Muli`, // Text & Subheadings
            variants: [`300`, `400`],
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `colin-tracy`,
        short_name: `ColinTracy`,
        start_url: `/`,
        background_color: `#169B62`,
        theme_color: `#169B62`,
        display: `minimal-ui`,
        icon: `src/assets/logos/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    title: `Colin Tracy`,
    description: `A somewhat normal, above average but still under-confident developer with full-stack skills`,
    keywords: `javascript, react, nodejs, expressjs, gatsbyjs, nextjs, colin, tracy, colin tracy, developer, software engineer`,
    image: `src/assets/logos/logo.png`,
    pathname: `https://www.colintracy.com`,
    region: `Salt Lake City`,
    position: `40.7608, 111.8910`,
    facebookId: ``,
    twitterUsername: `@truecolintracy`,
    facebookUrl: ``,
    instagramUrl: `@truecolintracy`,
    youtubeUrl: ``,
  },
}
