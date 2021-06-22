import React, { useState, useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";

extend({ OrbitControls });

const SpaceShip = () => {
  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load("/whosthereplease.gltf", setModel);
  }, []);
  return model ? <primitive object={model.scene} /> : null;
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />;
};

const Header = () => {
  return (
    <div id="header">
      <Canvas camera={{ position: [0, 0, -1] }}>
        <Controls />
        <Environment />
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra="1" />
        <SpaceShip />
      </Canvas>
      <Container id="header_content">
        <Button as="a" href="#bio">
          Stacie Ant
        </Button>
        <br></br>
        <Text>3D / Video Artist</Text>
      </Container>
    </div>
  );
};

export default Header;
