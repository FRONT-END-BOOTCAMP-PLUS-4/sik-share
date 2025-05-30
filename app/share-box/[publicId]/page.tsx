"use client";

import { useState } from "react";
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
import BottomSheet from "../components/BottomSheet";

const GLOBAL_Y_OFFSET = -0.3;
const RADIUS = 0.5;
const HEIGHT = 0.25;
const FOOD_HEIGHT_OFFSET = 0.15;
const COUNT = 5;

const positions = Array.from({ length: COUNT }, (_, i) => {
  const angle = (2 * Math.PI * i) / COUNT;
  return [Math.cos(angle) * RADIUS, Math.sin(angle) * RADIUS] as const;
});

const shareList = [
  {
    name: "tomato",
    title: "감자 나눔",
    description: "감자 나눔합니다.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "onion",
    title: "양파",
    description: "건강에 좋은 양파입니다.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "banana",
    title: "바나나",
    description: "맛있는 바나나!",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "carrot",
    title: "당근",
    description: "몸에 좋은 당근",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "cucumber",
    title: "오이",
    description: "아삭한 오이",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
];

const scaleMap = {
  tomato: 0.3,
  onion: 0.2,
  banana: 0.2,
  carrot: 0.2,
  cucumber: 0.1,
};

const ingredientComponents = {
  tomato: Tomato,
  onion: Onion,
  banana: Banana,
  carrot: Carrot,
  cucumber: Cucumber,
} as const;

const displayed = shareList.map((item, i) => ({
  ...item,
  Component:
    ingredientComponents[item.name as keyof typeof ingredientComponents],
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
  const [selectedItem, setSelectedItem] = useState<
    null | (typeof displayed)[0]
  >(null);

  return (
    <main className="w-full h-[80vh]">
      <Header />
      <h1 className="text-2xl text-center my-4">다훈님의 나눔함</h1>
      <Canvas camera={{ position: [0, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 5]} intensity={0.8} />
        <pointLight position={[0, 2, 0]} intensity={10} color="white" />
        <spotLight position={[-2, 5, 2]} angle={0.3} penumbra={1} />

        <ThreeDBack scale={0.6} position={[0, -0.3, -2]} />

        {/* 테이블 */}
        <ThreeDTable scale={1.5} position={[0, 0 + GLOBAL_Y_OFFSET, 0]} />

        {/* 접시 */}
        {displayed.map(({ dishPos }, idx) => (
          <ThreeDDish key={`dish-${idx}`} scale={1} position={dishPos} />
        ))}
        {/* 식재료 */}
        {displayed.map(({ name, Component, foodPos }, idx) => (
          <Component
            key={name}
            scale={scaleMap[name]}
            position={foodPos}
            onClick={() => setSelectedItem(displayed[idx])}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              document.body.style.cursor = "default";
            }}
          />
        ))}

        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
        />
      </Canvas>
      {/* 바텀시트 */}
      <BottomSheet
        open={!!selectedItem}
        onOpenChange={(open) => !open && setSelectedItem(null)}
        title={selectedItem?.title || ""}
        image={selectedItem?.image}
        description={selectedItem?.description || ""}
        timeLeft={selectedItem?.timeLeft || "12:00"}
        shareItem={selectedItem?.name || ""}
        lat={37.4841}
        lng={126.9497}
        location="관악 청년청"
      />
      <Footer />
    </main>
  );
}
