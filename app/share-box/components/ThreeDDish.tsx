import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type * as THREE from "three";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function ThreeDDish(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/dish.gltf");
  const dishRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (dishRef.current) {
      dishRef.current.rotation.y = -camera.rotation.y;
      dishRef.current.rotation.x = 0;
      dishRef.current.rotation.z = 0;
    }
  });

  return (
    <group ref={dishRef} {...props}>
      <primitive object={scene.clone()} />
    </group>
  );
}
