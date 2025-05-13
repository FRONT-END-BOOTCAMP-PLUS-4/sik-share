import { useGLTF } from "@react-three/drei";

export default function Onion() {
  const { scene } = useGLTF("/assets/3D/onion.gltf");

  return <primitive object={scene} scale={0.4} position={[1, -0.9, -1.3]} />;
}
