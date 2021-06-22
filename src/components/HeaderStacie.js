import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Container, Button } from "@chakra-ui/react";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <h2 id="loading">{progress} % loaded</h2>
    </Html>
  );
}

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./logo_3.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={0.0666} />
    </>
  );
};

export default function HeaderStacie() {
  return (
    <div id="whosthereplease">
      <Canvas camera={{ position: [0, -2, -10] }}>
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls autoRotate />
          <Environment preset="dawn" background />
        </Suspense>
      </Canvas>
      <Container id="header_content">
        <Button id="header_button" as="a" href="#bio">
          ENTER
        </Button>
      </Container>
    </div>
  );
}
