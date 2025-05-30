"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ThreeDTable from "../components/ThreeDTable";
import Footer from "@/components/common/Footer";
import ThreeDDish from "../components/ThreeDDish";
import Tomato from "../components/Tomato";
import Onion from "../components/Onion";
import Banana from "../components/Banana";
import Carrot from "../components/Carrot";
import Cucumber from "../components/Cucumber";
import Header from "@/components/common/Header";
import ThreeDBack from "../components/ThreeDBack";

const GLOBAL_Y_OFFSET = -0.3;

const RADIUS = 0.5;
const HEIGHT = 0.25;
const FOOD_HEIGHT_OFFSET = 0.15;
const COUNT = 5;

const positions = Array.from({ length: COUNT }, (_, i) => {
  const angle = (2 * Math.PI * i) / COUNT;
  return [Math.cos(angle) * RADIUS, Math.sin(angle) * RADIUS] as const;
});

const scaleMap = {
  tomato: 0.3,
  onion: 0.2,
  banana: 0.2,
  carrot: 0.2,
  cucumber: 0.1,
};

const shareList = ["tomato", "onion", "banana", "carrot", "cucumber"];

const ingredientComponents = {
  tomato: Tomato,
  onion: Onion,
  banana: Banana,
  carrot: Carrot,
  cucumber: Cucumber,
} as const;

const displayed = shareList.map((name, i) => ({
  name,
  Component: ingredientComponents[name as keyof typeof ingredientComponents],
  dishPos: [
    positions[i][0],
    HEIGHT + GLOBAL_Y_OFFSET,
    positions[i][1],
  ] as const,
  foodPos: [
    positions[i][0],
    HEIGHT + FOOD_HEIGHT_OFFSET + GLOBAL_Y_OFFSET,
    positions[i][1],
  ] as const,
}));

export default function ShareBoxPage() {
  return (
    <main className="w-full h-screen">
      <Header />
      <h1 className="text-2xl text-center my-4">다훈님의 나눔함</h1>
      <Canvas camera={{ position: [0, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 5]} intensity={0.8} />
        <pointLight position={[0, 2, 0]} intensity={10} color="white" />
        <spotLight position={[-2, 5, 2]} angle={0.3} penumbra={1} />

        <ThreeDBack scale={0.6} position={[0, -0.3, -2]} />

        {/* 테이블  */}
        <ThreeDTable scale={1.5} position={[0, 0 + GLOBAL_Y_OFFSET, 0]} />

        {/* 접시 */}
        {displayed.map(({ dishPos }, idx) => (
          <ThreeDDish key={`dish-${idx}`} scale={1} position={dishPos} />
        ))}
        {/* 식재료 */}
        {displayed.map(({ name, Component, foodPos }, idx) => (
          <Component key={name} scale={scaleMap[name]} position={foodPos} />
        ))}

        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
      <Footer />
    </main>
  );
}
