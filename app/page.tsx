import HeroSection from "@/app/components/HeroSection";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <HeroSection />
      <MapSection />
    </div>
  );
}
