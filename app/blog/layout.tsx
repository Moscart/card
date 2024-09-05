import React from "react";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={figtree.className}>{children}</div>;
}
