import { useGLTF } from "@react-three/drei";

export default function Cucumber() {
  const { scene } = useGLTF("/assets/3D/cucumber.gltf");

  return <primitive object={scene} scale={0.2} position={[0.5, -0.3, 0.7]} />;
}
