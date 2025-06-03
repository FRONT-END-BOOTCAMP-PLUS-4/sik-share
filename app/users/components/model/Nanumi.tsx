import { useRef, useState } from "react";
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
  const [isBouncing, setIsBouncing] = useState(false);
  const [startTime, setStartTime] = useState(0);

  // 클릭 이벤트 핸들러
  const handleClick = () => {
    setIsBouncing(true);
    setStartTime(performance.now() / 1000);
  };

  useFrame(() => {
    if (isBouncing && ref.current) {
      const t = performance.now() / 1000 - startTime;
      if (t < 2) {
        ref.current.position.y = -0.51 + Math.sin(t * 9) * 0.05;
      } else {
        ref.current.position.y = -0.51; // 초기화
        setIsBouncing(false);
      }
    }
  });

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <primitive
      ref={ref}
      object={scene}
      scale={6}
      position={[0.07, -0.51, -0.1]}
      onClick={handleClick}
    />
  );
}
