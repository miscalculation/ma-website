module.exports = {
  siteMetadata: {
    title: `Maheen Asghar`,
    name: `Maheen Asghar`,
    siteUrl: `https://maheenasghar.com/`,
    description: `Maheen Asghar's. Data scientist, programmer, coffee-drinker, art-enthusiast.`,
    hero: {
      heading: `Hi. I'm Maheen. Data scientist, programmer, coffee-drinker, art-enthusiast.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/miscalculation`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/maheenasghar/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
