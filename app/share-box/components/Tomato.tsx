import { useGLTF } from "@react-three/drei";

export default function Tomato() {
  const { scene } = useGLTF("/assets/3D/tomato.gltf");

  return <primitive object={scene} scale={0.5} position={[0.2, -0.9, -1.3]} />;
}
