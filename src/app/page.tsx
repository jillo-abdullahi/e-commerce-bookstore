'use client'

import Image from "next/image";
import ThreeDCube from "@/components/ThreeDCube";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between pb-24">
      <ThreeDCube />
    </main>
  );
}
