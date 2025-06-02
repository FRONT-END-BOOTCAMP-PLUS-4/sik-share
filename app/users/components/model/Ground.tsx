import { useGLTF } from "@react-three/drei";

export default function Ground() {
  const { scene } = useGLTF(
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/3d-model/ground.glb",
  );

  return <primitive object={scene} scale={7} position={[0.2, 0.1, -0.5]} />;
}
