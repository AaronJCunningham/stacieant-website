import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

const Menu = () => {
  const scroll = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div id="navbar">
      <Box boxShadow="md">
        <Container maxW="70rem">
          <a href="#whosthereplease">
            <Text fontWeight="500">Stacie Ant</Text>
          </a>
          <a href="#bio">
            <Text>Bio</Text>
          </a>
          <a href="#portfolio">
            <Text>Portfolio</Text>
          </a>
          <a href="#cv">
            <Text>CV</Text>
          </a>
          <a href="#news">
            <Text>News</Text>
          </a>
          <a href="#contact">
            <Text onClick={scroll}>Contact</Text>
          </a>
        </Container>
      </Box>
    </div>
  );
};
export default Menu;
