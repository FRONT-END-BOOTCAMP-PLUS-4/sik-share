import { useGLTF } from "@react-three/drei";

export default function Banana() {
  const { scene } = useGLTF("/assets/3D/banana.gltf");

  return <primitive object={scene} scale={0.5} position={[-1, -0.3, 0.2]} />;
}
