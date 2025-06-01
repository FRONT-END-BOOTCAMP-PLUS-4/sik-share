import { useGLTF } from "@react-three/drei";

interface NanumiProps {
  level: string; //"Sprout" | "Sucus" | "Leaf" | "Flower" | "Fruit"
}

export default function Nanumi({ level }: NanumiProps) {
  const { scene } = useGLTF(
    `https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/3d-model/nanumi_${level}.glb`,
  );

  return <primitive object={scene} scale={6} position={[0.07, -0.51, -0.1]} />;
}
