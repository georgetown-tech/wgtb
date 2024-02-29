exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query data from GraphQL
  const tagQuery = await graphql(`
    query {
      allContentfulArticle {
        nodes {
          id
          url
          title
          author
          datetime
          image {
            url
          }
          preview {
            preview
          }
          metadata {
            tags {
              id
              name
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (tagQuery.errors) {
    throw result.errors;
  }

  // Process data and create pages
  const articles = tagQuery.data.allContentfulArticle.nodes;

  // Group articles by tags
  const articlesByTag = {};
  articles.forEach((article) => {
    article.metadata.tags.forEach((tag) => {
      const tagId = tag.id;
      const tagName = tag.name;
      if (!articlesByTag[tagId]) {
        articlesByTag[tagId] = [];
      }
      articlesByTag[tagId].push(article);
    });
  });

  // Create pages for each tag
  Object.keys(articlesByTag).forEach((tagId) => {
    const tagArticles = articlesByTag[tagId];
    tagArticles.forEach((article) => {
      const tagName = article.metadata.tags.find(
        (tag) => tag.id === tagId
      ).name;
      createPage({
        path: `/tags/${tagName}`, // URL path for the page
        component: require.resolve("./src/pages/tags.js"), // Component to use for rendering the page
        context: {
          tagId,
          tagArticles,
          tagName,
        },
      });
    });
  });

  // Group articles by author
  const articlesByAuthor = {};
  articles.forEach((article) => {
    const authorName = article.author;
    if (!articlesByAuthor[authorName]) {
      articlesByAuthor[authorName] = [];
    }
    articlesByAuthor[authorName].push(article);
  });

  // Create pages for each author
  Object.keys(articlesByAuthor).forEach((authorName) => {
    const authorArticles = articlesByAuthor[authorName];
    createPage({
      path: `/authors/${authorName}`, // URL path for the page
      component: require.resolve("./src/pages/authors.js"), // Component to use for rendering the page
      context: {
        authorName,
        authorArticles,
      },
    });
  });
};
