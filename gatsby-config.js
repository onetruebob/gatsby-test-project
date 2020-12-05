module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-us-east-1.graphcms.com/v2/ckic45swbm40r01xt5c0za1pa/master",
      },
    },
  ],
};
