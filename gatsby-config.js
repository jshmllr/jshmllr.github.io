module.exports = {
  siteMetadata: {
    title: `JshMllr - The Website of Josh Miller.`,
    name: `JshMllr | Portfolio & Journal`,
    siteUrl: `https://jshmllr.com`,
    description: `Design plus code better known on the internet as JshMllr`,
    hero: {
      heading: `Your process isn't the same without a leader in product design and prototyping. I can help with that.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_jshmllr`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jshmllr`,
      },
      {
        name: `github`,
        url: `https://github.com/jshmllr`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jshmllr/`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-66181337-1",
      },
    },
    {
      resolve: `gatsby-remark-video`,
      options: {
        width: "100%",
        height: 'auto',
        preload: 'auto',
        muted: true,
        autoplay: true,
        playsinline: true,
        controls: true,
        loop: true,
      },
    },
  ],
};
