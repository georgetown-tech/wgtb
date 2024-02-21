/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `wgtbSiteBeta`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    { //web font loader plugin
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: 'PT Serif',
            file: 'https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap'
          }, 
          {
            name: 'Open Sans',
            file: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap'
          }, 
        ],
      },
    },
    { //contentful delivery API
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
      }
    },
    { //manifest plugin for icons (favicon)
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/radioFavicon.png', //can add more icons for different devices
      },
    },
  ]
};
