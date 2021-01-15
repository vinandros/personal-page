require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.vinandros.com`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Site`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#e5f1e4`,
        theme_color: `#abf0ad`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
