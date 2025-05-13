import { useGLTF } from "@react-three/drei";

export default function Banana() {
  const { scene } = useGLTF("/assets/3D/banana.gltf");

  return <primitive object={scene} scale={0.5} position={[0.7, -0.8, -0.8]} />;
}
