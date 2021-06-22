import React from "react";
import { Heading, Text } from "@chakra-ui/react";

const Bio = () => {
  return (
    <div id="bio">
      <Heading mt="4" mb="2" size="lg" fontSize="10rem" align="left">
        BIO
      </Heading>
      <hr></hr>
      <Text m="4" fontSize="1.2rem">
        Stacie Ant is a new media artist currently based in Berlin. Ant draws on
        her experiences as a female artist while developing the critical views
        of our technologically-saturated contemporary society that inform her
        work. Using video, installation, and performance, Ant reinvents elements
        of contemporary culture through fictional, maximalist narratives.{" "}
        <br></br>
        <br></br>Stacie Ant’s character-driven work operates as a critique and
        rejection of the male gaze, enhanced by a modern culture of digital
        immersion. She harnesses the very digital tools offered in a
        technologically-dependent world as a means of empowering female identity
        and sexuality. Often humorous, Ant’s work offers a way of looking at a
        fast-paced digital realm through a lens of irony and satire. Stacie is
        represented by Harlesden High Street.
      </Text>
    </div>
  );
};

export default Bio;
