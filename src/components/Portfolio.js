import React from "react";
import { Heading, Image, SimpleGrid } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <Heading mt="2" mb="2" size="lg" fontSize="10rem" align="left">
        PORTFOLIO
      </Heading>
      <hr></hr>
      <SimpleGrid columns={[3, null, 4]} spacing={1} mt="6">
        <Image
          src="stacie_ant01.jpg"
          alt="test"
          objectFit="cover"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
        <Image
          objectFit="cover"
          src="stacie_ant01.jpg"
          alt="test"
          fit="contain"
        />
      </SimpleGrid>
    </div>
  );
};

export default Portfolio;
