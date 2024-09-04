import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function NFTLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={outfit.className}>{children}</div>;
}
