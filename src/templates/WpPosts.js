import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Link, Container, Text, Heading, Image } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const WpPosts = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={data.wpPost.seo.metaDesc} />
      </Helmet>
      <div id="header">
        <Heading as="h1" position="absolute" color="whitesmoke">
          {data.wpPost.title}
        </Heading>
        <Image
          src={data.wpPost.featuredImage.node.link}
          objectFit="cover"
          overflow="hidden"
          minWidth="100%"
          alt="test"
        />
      </div>
      <Container maxW="70rem" mb="125">
        <Text mt="10">
          <div
            dangerouslySetInnerHTML={{
              __html: data.wpPost.content,
            }}
          />
        </Text>
        <Link as={GatsbyLink} to="/#news">
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
      featuredImage {
        node {
          link
        }
      }
      seo {
        metaDesc
      }
    }
  }
`;
