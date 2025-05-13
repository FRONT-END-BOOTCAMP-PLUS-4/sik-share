import { useGLTF } from "@react-three/drei";

export default function Carrot() {
  const { scene } = useGLTF("/assets/3D/carrot.gltf");

  return <primitive object={scene} scale={0.4} position={[0.2, -0.9, -0.1]} />;
}
