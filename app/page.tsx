import HeroSection from "@/app/components/HeroSection";
import MapSection from "@/app/components/MapSection";
import CommunicateSection from "@/app/components/CommunicateSection";
import ScrollSection from "@/app/components/ScrollSection";
import EndSection from "./components/EndSection";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AddAppButton from "@/components/common/AddAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-28">
        <HeroSection />
        <MapSection />
        <CommunicateSection />
        <ScrollSection />
        <EndSection />
        <AddAppButton />
      </div>
      <Footer />
    </>
  );
}
