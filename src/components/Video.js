import React from "react";
import { AspectRatio, SimpleGrid } from "@chakra-ui/react";

const Video = () => {
  return (
    <>
      <hr></hr>
      <SimpleGrid columns={[3, null, 2]} spacing={1} mt="6">
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </SimpleGrid>
    </>
  );
};

export default Video;
