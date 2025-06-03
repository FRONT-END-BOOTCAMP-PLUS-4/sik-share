"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Nanumi from "@/app/users/components/model/Nanumi";
import Ground from "@/app/users/components/model/Ground";
interface MyCharacterProps {
  grade: string;
}

export default function MyCharacter({ grade }: MyCharacterProps) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full h-full">
        <Canvas camera={{ fov: 20 }}>
          <Environment preset="sunset" background={false} />
          <ambientLight intensity={0.5} color="white" />
          <directionalLight position={[5, 2, 3]} intensity={0.2} />
          <pointLight
            position={[0, 2, 0]}
            intensity={0.7}
            distance={5}
            decay={2}
            color="#ffd966"
          />
          <hemisphereLight args={["#ffe8a3", "#51e9eb", 0.3]} />

          <Ground />
          <Nanumi level={grade} />

          <OrbitControls
            enableZoom={false}
            minDistance={10}
            maxDistance={10}
            minPolarAngle={Math.PI / 2.8}
            maxPolarAngle={Math.PI / 15}
            minAzimuthAngle={-Math.PI / 1.5}
            maxAzimuthAngle={Math.PI / 5}
          />
        </Canvas>
      </div>
    </div>
  );
}
