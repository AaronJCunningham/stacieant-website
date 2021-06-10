const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const WpPostTemplate = path.resolve(`./src/templates/WpPosts.js`);
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

  const { allWpPost } = result.data;

  allWpPost.nodes.map((post) => {
    console.log(post.uri);
    createPage({
      path: post.uri,
      component: WpPostTemplate,
      context: post,
    });
  });
};
