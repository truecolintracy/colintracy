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
            family: `PT Sans Narrow`, // Headings - H1, H2, H3, H4, H5, H6
            variants: [`regular`, `bold`],
          },
          {
            family: `Source Sans Pro`, // Text & Subheadings
            variants: [`light`, `regular`, `semi-bold`],
          },
          {
            family: `Source Serif Pro`, // Reading Text
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
        name: `equalizer-hitches`,
        short_name: `EQhitches`,
        start_url: `/`,
        background_color: `#2d2926`,
        theme_color: `#2d2926`,
        display: `minimal-ui`,
        icon: `src/assets/favicons/**`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    title: `Colin Tracy`,
    description:
      `A somewhat normal, above average but still under-confident developer with full-stack skills`,
    keywords:
      `javascript, react, nodejs, expressjs, gatsbyjs, nextjs, colin, tracy, colin tracy, developer, software engineer`,
    image: `src/assets/favicons/**`,
    pathname: `https://www.colintracy.com`,
    region: `Nashville`,
    position: `36.1627, 86.7816`,
    facebookId: ``,
    twitterUsername: `@truecolintracy`,
    facebookUrl: ``,
    instagramUrl: ``,
    youtubeUrl: ``,
  },
}
