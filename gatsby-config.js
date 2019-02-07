/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `MyFutureSaver`,
    description: `Education is the key to brighter future.
    Sending your child to higher education can be expensive. There are two things you can do now to help your child to reach their potential (without costing you a dime!)`,
    author: `SmartSAVER`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
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
        name: `Myfuturesaver.org`,
        short_name: `myfuturesaver`,
        start_url: `/`,
        background_color: `#003b59`,
        theme_color: `#003b59`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128967769-2',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
