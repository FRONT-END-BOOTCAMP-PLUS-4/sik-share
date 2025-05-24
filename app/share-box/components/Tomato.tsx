import { useGLTF } from "@react-three/drei";

export default function Tomato() {
  const { scene } = useGLTF("/assets/3D/tomato.gltf");

  return <primitive object={scene} scale={0.4} position={[0, -0.4, 0.8]} />;
}
