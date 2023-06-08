"use client";

import ThreeDCube from "@/app/home/ThreeDCube";
import { authorInfo } from "@/utils/constants";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between pb-24">
      <div className="absolute left-0 right-0 mx-auto w-fit md:left-28 md:mx-1 mt-8 mb-4 flex flex-col items-center md:items-start justify-center">
        <h1 className="font-bold text-sm text-orange uppercase mb-2">
          Featured author:
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold">
          <a
            href={authorInfo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {authorInfo.name}
          </a>
        </h1>
      </div>
      <ThreeDCube />
    </main>
  );
}
