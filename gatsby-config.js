require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.vinandros.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_CMS_API_KEY,
      },
    },
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
  ],
};
