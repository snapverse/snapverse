import type { MeshProps } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { useTexture } from "@react-three/drei";
import "./App.css";

const styles = Object.freeze({
  width: window.innerWidth,
  height: window.innerHeight,
});

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 50] }} style={styles}>
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
    </Canvas>
  );
}

const Sphere = (props: MeshProps) => {
  const textureProps = useTexture({
    map: "/textures/ganges_river_pebbles_diff_4k.jpg",
    displacementMap: "/textures/ganges_river_pebbles_disp_4k.png",
    normalMap: "/textures/ganges_river_pebbles_nor_gl_4k.exr",
    roughnessMap: "/textures/ganges_river_pebbles_rough_4k.exr",
  });

  return (
    <mesh {...props} scale={1}>
      <sphereGeometry args={[15, 32, 16]} />
      <meshStandardMaterial {...textureProps} />
    </mesh>
  );
};

export default App;
