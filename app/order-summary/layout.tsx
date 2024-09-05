import React from "react";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export default function OrderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={redHatDisplay.className}>{children}</div>;
}
