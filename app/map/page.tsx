"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { MapView } from "./components/MapView";
// import { useRouter } from "next/navigation";
// import DropdownButton from "@/components/common/DropdownButton";

export default function MapPage() {
  return (
    <>
      <Header />
      <MapView />
      <Footer />
    </>
  );
}
