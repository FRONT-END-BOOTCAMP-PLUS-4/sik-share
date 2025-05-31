import { useGLTF } from "@react-three/drei";

interface NanumiProps {
  level: string; //"Leaf" | "Sucus" | "Flower" | "Flower" | "Flower"
}

export default function Nanumi({ level }: NanumiProps) {
  const { scene } = useGLTF(
    `https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/3d-model/nanumi_${level}.glb`,
  );

  return <primitive object={scene} scale={10} position={[-0.7, -0.3, -0.3]} />;
}
