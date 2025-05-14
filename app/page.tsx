import HeroSection from "@/app/components/HeroSection";
import MapSection from "@/app/components/MapSection";
import CommunicateSection from "@/app/components/CommunicateSection";
import ScrollSection from "@/app/components/ScrollSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-28">
      <HeroSection />
      <MapSection />
      <CommunicateSection />
      <ScrollSection />
    </div>
  );
}
