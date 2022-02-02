module.exports = {
  siteMetadata: {
    title: `Martin Laws`,
    description: `Martin Laws | Development Manager, design thinker, dog dad.`,
    author: `@martinlaws`,
    url: "https://mlaws.ca",
    image: "/images/martin.png",
    twitterUsername: "@martinblaws",
  },
  plugins: [
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
        name: `Martin Laws | Development Manager`,
        short_name: `mlaws`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/martin.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
