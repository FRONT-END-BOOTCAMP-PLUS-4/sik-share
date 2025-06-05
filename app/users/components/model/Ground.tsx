import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

export default function Ground() {
  const { scene } = useGLTF(
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/3d-model/ground.glb",
  );

  const wings = scene.getObjectByName("Wings") as THREE.Mesh;

  useFrame((_, delta) => {
    if (wings) {
      wings.rotation.z += delta * 2;
    }
  });

  return <primitive object={scene} scale={7} position={[0.2, 0.1, -0.5]} />;
}
