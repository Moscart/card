import React from "react";
import { Manrope } from "next/font/google";
import { Metadata } from "next";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advice Generator",
  description:
    "Get advice on a wide range of topics, from relationships to career development.",
};

export default function AdviceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={manrope.className}>{children}</div>;
}
