import { useGLTF } from "@react-three/drei";

export default function Cucumber() {
  const { scene } = useGLTF("/assets/3D/cucumber.gltf");

  return <primitive object={scene} scale={0.2} position={[1, -0.8, 0]} />;
}
