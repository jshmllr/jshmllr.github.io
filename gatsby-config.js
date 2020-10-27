module.exports = {
  siteMetadata: {
    title: `JshMllr - The Website of Josh Miller.`,
    name: `JshMllr | Portfolio & Journal`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `My name is Josh, normally found on the Internet as JshMllr.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_jshmllr`,
      },
      {
        name: `github`,
        url: `https://github.com/jshmllr`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jshmllr`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jshmllr/`,
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
