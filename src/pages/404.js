import * as React from "react";
import { Link } from "gatsby";
import { Container, Heading, Text, Image } from "@chakra-ui/react";
// styles

// markup
const NotFoundPage = () => {
  return (
    <Container justifyContent="center" alignItems="center">
      <Image
        mt="8"
        src="stacie_ant01.jpg"
        alt="test"
        objectFit="cover"
        fit="contain"
      />
      <Heading as="h2">WHOOOPS, WHERE ARE YOU?</Heading>
      <Text>
        I think you are lost, go back <Link to="/">home!</Link>.
      </Text>
    </Container>
  );
};

export default NotFoundPage;
