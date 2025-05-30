"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NanumiA from "@/app/users/components/model/NanumiA";
import NanumiB from "@/app/users/components/model/NanumiB";

interface MyCharacterProps {
  grade: string;
}

export default function MyCharacter({ grade }: MyCharacterProps) {
  return (
    <div className="h-[calc(100%-74px)] flex items-center justify-center">
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas camera={{ fov: 20 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 5]} intensity={0.8} />
          <pointLight position={[0, 3, 0]} intensity={10} color="white" />
          <spotLight position={[-2, 5, 2]} angle={0.3} penumbra={1} />

          <NanumiA />
          {/* <NanumiB /> */}

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
