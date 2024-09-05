import React from "react";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({ subsets: ["latin"] });

export default function SummaryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={hanken.className}>{children}</div>;
}
