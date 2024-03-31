"use client"
import SportsSection from "@/components/SportsSection";
import SpotlightSection from "@/components/SpotlightSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="bg-[#F7F7F8] dark:bg-[#292B32]">
        <SportsSection />
        <SpotlightSection />
      </div>
    </>
  );
}
