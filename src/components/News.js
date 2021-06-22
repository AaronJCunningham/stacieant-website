import * as React from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import { Heading, Box, Link, SimpleGrid, Image } from "@chakra-ui/react";

const News = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        nodes {
          id
          title
          excerpt
          uri
          featuredImage {
            node {
              altText
              link
            }
          }
        }
      }
    }
  `);

  const { allWpPost } = data;

  return (
    <div id="news">
      <Heading mt="2" mb="4" size="lg" fontSize="10rem" align="left">
        NEWS
      </Heading>
      <hr></hr>
      <SimpleGrid columns={[3, null, 3]} spacing={1} mt="6">
        {allWpPost.nodes.map(({ id, title, excerpt, uri, featuredImage }) => (
          <Link key={id} as={GatsbyLink} to={uri} _hover="none">
            <Box
              objectFit="cover"
              fit="contain"
              key={id}
              p={5}
              shadow="md"
              borderWidth="1px"
            >
              <Heading as="h2" mb="4">
                {title}
              </Heading>
              <div
                id="link"
                style={{ textDecoration: "none" }}
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
              ></div>
              <Image
                mt="4"
                src={featuredImage.node.link}
                objectFit="cover"
                alt={featuredImage.node.altText}
                fit="contain"
              />
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default News;
