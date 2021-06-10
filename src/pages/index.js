import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Container, Stack, Box, Heading, Text, Link } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Heading as="h1" m="5">
        #100DaysofGatsby
      </Heading>
      <Stack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2">Hello World</Heading>
          <Text mt="4">
            <span dangerouslySetInnerHTML={{ __html: "<p>example text</p>" }} />
          </Text>
          <Link as={GatsbyLink} to="#">
            Read More{" "}
          </Link>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2">Hello World</Heading>
          <Text mt="4">
            <span dangerouslySetInnerHTML={{ __html: "<p>example text</p>" }} />
          </Text>
          <Link as={GatsbyLink} to="#">
            Read More{" "}
          </Link>
        </Box>
      </Stack>
    </Container>
  );
};

export default HomePage;
