import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type * as THREE from "three";

interface NanumiProps {
  level: string; //"Sprout" | "Sucus" | "Leaf" | "Flower" | "Fruit"
}

export default function Nanumi({ level }: NanumiProps) {
  const { scene } = useGLTF(
    `https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/3d-model/nanumi_${level}.glb`,
  );

  const ref = useRef<THREE.Object3D>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.y = -0.51 + Math.sin(t * 6) * 0.05;
      ref.current.rotation.y = Math.sin(t) * 0.1;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={6}
      position={[0.07, -0.51, -0.1]}
    />
  );
}
