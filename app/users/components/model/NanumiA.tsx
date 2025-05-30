import { useGLTF } from "@react-three/drei";

export default function NanumiA() {
  const { scene } = useGLTF(
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/3d-model/nanumi_sucus.glb",
  );

  return <primitive object={scene} scale={10} position={[-0.7, -0.3, -0.3]} />;
}
