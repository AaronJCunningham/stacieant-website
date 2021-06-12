const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
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
      allWpPortfolio {
        nodes {
          __typename
          id
          databaseId
          uri
        }
      }
    }
  `);

  // const portfolioResult = await graphql(`
  //   query {
  //     allWpPortfolio {
  //       nodes {
  //         __typename
  //         id
  //         databaseId
  //         uri
  //       }
  //     }
  //   }
  // `);

  const { allWpPost, allWpPortfolio } = result.data;
  console.log(result.data);

  allWpPost.nodes.map((post) => {
    createPage({
      path: post.uri,
      component: WpPostTemplate,
      context: post,
    });
  });

  allWpPortfolio.nodes.map((port) => {
    console.log(allWpPortfolio);
    createPage({
      path: port.uri,
      component: WpPortfolioTemplate,
      context: port,
    });
  });
};
