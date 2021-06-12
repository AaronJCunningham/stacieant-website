import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Link, Container, Text, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const WpPortfolio = (query) => {
  console.log(query.data);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={query.data.wpPortfolio.seo.metaDesc}
        />
      </Helmet>
      <Container>
        <Heading as="h1">{query.data.wpPortfolio.title}</Heading>
        <Text>
          <div
            dangerouslySetInnerHTML={{
              __html: query.data.wpPortfolio.content,
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

export default WpPortfolio;

export const query = graphql`
  query PortById($id: String) {
    wpPortfolio(id: { eq: $id }) {
      title
      content
      seo {
        metaDesc
      }
    }
  }
`;
