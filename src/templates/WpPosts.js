import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Link, Container, Text, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const WpPosts = (query) => {
  console.log(query.data);
  return (
    <>
      <Helmet>
        <meta name="description" content={query.data.wpPost.seo.metaDesc} />
      </Helmet>
      <Container>
        <Heading as="h1">{query.data.wpPost.title}</Heading>
        <Text>
          <div
            dangerouslySetInnerHTML={{
              __html: query.data.wpPost.content,
            }}
          />
        </Text>
        <Link as={GatsbyLink} to="/">
          Back To Posts
        </Link>
      </Container>
    </>
  );
};

export default WpPosts;

export const query = graphql`
  query PostById($id: String) {
    wpPost(id: { eq: $id }) {
      title
      content
      seo {
        metaDesc
      }
    }
  }
`;
