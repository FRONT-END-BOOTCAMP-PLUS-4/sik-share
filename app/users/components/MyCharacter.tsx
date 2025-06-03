"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Nanumi from "@/app/users/components/model/Nanumi";
import Ground from "@/app/users/components/model/Ground";
import { cn } from "@/lib/utils";
interface MyCharacterProps {
  grade: string;
}

export default function MyCharacter({ grade }: MyCharacterProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="h-full flex items-center justify-center relative">
      <img
        src={`https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/3d-model/${grade}.png`}
        alt="로딩 이미지"
        className={cn(
          "object-contain w-full h-full absolute opacity-100 transition-opacity duration-500",
          isLoaded && "opacity-0",
        )}
      />
      <div
        className={cn(
          "w-full h-full transition-opacity duration-300 opacity-0",
          isLoaded && "opacity-100",
        )}
      >
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

          <Suspense fallback={null}>
            <Ground />
            <Nanumi level={grade} onLoaded={() => setIsLoaded(true)} />
          </Suspense>

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
