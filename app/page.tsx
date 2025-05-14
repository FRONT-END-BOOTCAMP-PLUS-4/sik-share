import HeroSection from "@/app/components/HeroSection";
import MapSection from "@/app/components/MapSection";
import CommunicateSection from "@/app/components/CommunicateSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <HeroSection />
      <MapSection />
      <CommunicateSection />
    </div>
  );
}
