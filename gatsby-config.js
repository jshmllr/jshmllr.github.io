module.exports = {
  siteMetadata: {
    title: `JshMllr - The Journal Portfolio of Josh Miller`,
    name: `Josh Miller`,
    siteUrl: `https://jshmllr.com`,
    description: `Josh Miller is a Tennessee user interface designer currently working with the best in the digital journalism realm while freelancing and taking the occasional hiking adventure.`,

    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jshmllr/`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jshmllr`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/jshmllr`,
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
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio by Josh`,
        short_name: `Josh Miller`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
