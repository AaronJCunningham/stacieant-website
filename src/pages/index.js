import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Container, Stack, Heading, Box, Link } from "@chakra-ui/react";

const HomePage = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          title
          excerpt
          uri
        }
      }

      allWpPortfolio {
        nodes {
          id
          title
          uri
        }
      }
    }
  `);

  const { allWpPost, allWpPortfolio } = data;

  return (
    <Container maxW="xl" centerContent>
      <canvas>test</canvas>
      <Stack spacing={8}>
        {allWpPost.nodes.map(({ id, title, excerpt, uri }) => (
          <Box key={id} p={5} shadow="md" borderWidth="1px">
            <Heading as="h2">{title}</Heading>
            <div
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
            ></div>
            <Link as={GatsbyLink} to={uri}>
              Read More{" "}
            </Link>
          </Box>
        ))}
      </Stack>
      <div>
        <h1>Portfolio</h1>
      </div>
      <Stack spacing={8}>
        {allWpPortfolio.nodes.map(({ id, title, uri }) => (
          <Box key={id} p={5} shadow="md" borderWidth="1px">
            <Heading as="h2">{title}</Heading>

            <Link as={GatsbyLink} to={`${uri}`}>
              Read More{" "}
            </Link>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default HomePage;
