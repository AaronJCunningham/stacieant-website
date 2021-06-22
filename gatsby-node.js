const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const WpPostTemplate = path.resolve(`./src/templates/WpPosts.js`);
  const WpPortfolioTemplate = path.resolve(`./src/templates/WpPortfolio.js`);
  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          __typename
          id
          databaseId
          uri
        }
      }
    }
  `);

  const { allWpPost, allWpPortfolio } = result.data;

  allWpPost.nodes.map((post) => {
    createPage({
      path: post.uri,
      component: WpPostTemplate,
      context: post,
    });
  });
};
