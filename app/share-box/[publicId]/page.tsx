"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
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

interface ShareListItem {
  id: number;
  title: string;
  description: string;
  ownerId: string;
  organizerNickname: string;
  organizerProfileUrl: string;
  organizerShareScore: number;
  createdAt: string | Date;
  locationNote: string;
  lat: number;
  lng: number;
  desiredItemName: string;
  imageUrls: string[];
  neighborhoodName: string;
  remainingHours: string;
  status: number;
}

interface UserInfo {
  id: string;
  nickname: string;
  profileUrl: string | null;
  shareScore: number;
}

interface DisplayItem extends ShareListItem {
  name: string;
  image: string;
  Component: React.ComponentType<JSX.IntrinsicElements["group"]>;
  dishPos: [number, number, number];
  foodPos: [number, number, number];
}

type IngredientName = keyof typeof ingredientComponents;

const GLOBAL_Y_OFFSET = -0.3;
const RADIUS = 0.5;
const HEIGHT = 0.25;
const FOOD_HEIGHT_OFFSET = 0.15;

const ingredientComponents = {
  바나나: Banana,
  당근: Carrot,
  오이: Cucumber,
  토마토: Tomato,
  양파: Onion,
};

const scaleMap = {
  바나나: 0.2,
  당근: 0.2,
  오이: 0.1,
  토마토: 0.3,
  양파: 0.2,
};

export default function ShareBoxPage() {
  const [selectedItem, setSelectedItem] = useState<DisplayItem | null>(null);
  const [shareList, setShareList] = useState<ShareListItem[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const params = useParams();
  const publicId = params.publicId;

  useEffect(() => {
    if (!publicId) return;
    fetch(`/api/share-box/${publicId}`)
      .then((res) => res.json())
      .then((data) => {
        setShareList(data);
        console.log("Fetched share list:", data);
      });
  }, [publicId]);

  useEffect(() => {
    if (!publicId) return;
    fetch(`/api/share-box/${publicId}/info`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        console.log("Fetched user Info:", data);
      });
  }, [publicId]);

  const displayed: DisplayItem[] = useMemo(() => {
    const count = shareList.length;
    if (count === 0) return [];

    const positions = Array.from({ length: count }, (_, i) => {
      const angle = (2 * Math.PI * i) / count;
      return [Math.cos(angle) * RADIUS, Math.sin(angle) * RADIUS] as const;
    });

    return shareList
      .map((item, i) => {
        const name = item.desiredItemName as IngredientName;
        const Component = ingredientComponents[name];
        if (!Component) return null;

        return {
          ...item,
          name: item.desiredItemName,
          image: item.imageUrls?.[0],
          Component,
          dishPos: [
            positions[i][0],
            HEIGHT + GLOBAL_Y_OFFSET,
            positions[i][1],
          ] as [number, number, number],
          foodPos: [
            positions[i][0],
            HEIGHT + FOOD_HEIGHT_OFFSET + GLOBAL_Y_OFFSET,
            positions[i][1],
          ] as [number, number, number],
        };
      })
      .filter(Boolean) as DisplayItem[];
  }, [shareList]);

  // 이슈가 있습니다. orbitControls의 props 값에는 아래 props 값들이 없지만, 동작은 잘 됩니다.
  // 해결방법으로 무시하게 해놓긴 했는데, 송하님도 마찬가지로 이 오류가 날거라 나중에 한번 확인해봐야 할 것 같습니다.

  // @ts-ignore
  const orbitControls = (
    <OrbitControls
      enablePan={true}
      enableZoom={false}
      enableRotate={true}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 3}
    />
  );
  return (
    <main className="w-full h-[80vh]">
      <Header />
      <h1 className="text-2xl text-center my-4">
        {userInfo ? `${userInfo.nickname} 님의 공유함` : "공유함"}
      </h1>
      <Canvas camera={{ position: [0, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 5]} intensity={0.8} />
        <pointLight position={[0, 2, 0]} intensity={10} color="white" />
        <spotLight position={[-2, 5, 2]} angle={0.3} penumbra={1} />
        <ThreeDBack scale={0.6} position={[0, -0.3, -2]} />
        <ThreeDTable scale={1.5} position={[0, 0 + GLOBAL_Y_OFFSET, 0]} />
        {displayed.map(({ dishPos, id }) => (
          <ThreeDDish key={`dish-${id}`} scale={1} position={dishPos} />
        ))}
        {displayed.map(({ name, Component, foodPos, id }, i) => (
          <Component
            key={name + id}
            scale={scaleMap[name as keyof typeof scaleMap] || 0.2}
            position={foodPos}
            onClick={() => setSelectedItem(displayed[i])}
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
        {orbitControls}
      </Canvas>
      <BottomSheet
        open={!!selectedItem}
        action={(open) => !open && setSelectedItem(null)}
        title={selectedItem?.title || ""}
        image={selectedItem?.image || ""}
        description={selectedItem?.description || ""}
        remainingHours={selectedItem?.remainingHours || ""}
        shareItem={selectedItem?.name || ""}
        lat={selectedItem?.lat}
        lng={selectedItem?.lng}
        location={selectedItem?.locationNote || ""}
        id={selectedItem?.id || 0}
      />
      <Footer />
    </main>
  );
}
