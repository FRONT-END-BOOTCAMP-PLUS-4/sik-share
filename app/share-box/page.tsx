"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Egg from "./components/Egg";
import Tomato from "./components/Tomato";
import Onion from "./components/Onion";
import Carrot from "./components/Carrot";
import Cucumber from "./components/Cucumber";

function KitchenBackground() {
  const { scene } = useGLTF("/assets/3D/kitchen.gltf");
  return <primitive object={scene} scale={1.5} />;
}

function CameraInsideLook() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(
      -2.61315196081733,
      3.2265678657935672,
      2.78580269170396,
    );
    camera.rotation.set(
      -0.8585769707846191,
      -0.5499333325855,
      -0.5443221758118252,
    );
  }, [camera]);

  return null;
}

// 🧾 페이지
export default function ShareBoxPage() {
  return (
    <div>
      <div style={{ width: "100%", height: "100vh" }}>
        <Canvas camera={{ fov: 20 }}>
          <CameraInsideLook />

          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <Suspense fallback={null}>
            <Stage intensity={0.6}>
              <KitchenBackground />
              <Egg />
              <Tomato />
              <Onion />
              <Carrot />
              <Cucumber />
            </Stage>
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
