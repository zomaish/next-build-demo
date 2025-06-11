import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const nextConfig: NextConfig = (phase: string) => {
  console.log(phase, PHASE_PRODUCTION_BUILD);

  let pageExtensions = ["ts", "tsx", "myext.tsx", "myext.ts"];

  if (phase === PHASE_PRODUCTION_BUILD) {
    pageExtensions =
      process.env.APP_NAME === "app1"
        ? ["myext.tsx", "myext.ts"]
        : ["ts", "tsx", "myext.tsx", "myext.ts"];
  }

  return {
    distDir: process.env.APP_NAME === "app1" ? ".next/app1" : ".next/app2",
    output: "export",
    pageExtensions,
    images: {
      unoptimized: true,
    },
  };
};

export default nextConfig;
