import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Link, Container, Text, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const WpPosts = ({ data }) => {
  console.log(data);
  return (
    <>
      <Helmet>
        <meta name="description" content={data.wpPost.seo.metaDesc} />
      </Helmet>
      <Container>
        <Heading as="h1">{data.wpPost.title}</Heading>
        <Text>
          <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
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
