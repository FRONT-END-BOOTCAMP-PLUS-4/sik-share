import { useGLTF } from "@react-three/drei";

export default function Onion() {
  const { scene } = useGLTF("/assets/3D/onion.gltf");

  return <primitive object={scene} scale={0.3} position={[-0.1, -0.3, 0.2]} />;
}
