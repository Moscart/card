import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Illustration from "@/public/assets/blog/illustration-article.svg";
import React from "react";

export default function BlogPage() {
  return (
    <div className="bg-[hsl(var(--blog-yellow))] min-h-screen flex justify-center items-center px-6">
      <div className="bg-white p-6 rounded-[20px] border border-black flex flex-col gap-6 max-w-[327px] sm:max-w-[384px] font-medium text-[hsl(var(--blog-dark-gray))] shadow-[8px_8px_0_0_#000]">
        <div className="rounded-[10px] overflow-hidden h-[200px] relative">
          <Image
            src={Illustration}
            alt="Illustration"
            className="object-cover"
            fill
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-extrabold bg-[hsl(var(--blog-yellow))] py-1 px-3 w-fit rounded-sm text-xs sm:text-sm">
            Learning
          </div>
          <div className="text-xs sm:text-sm">Published 21 Dec 2023</div>
          <div className="font-extrabold text-xl sm:text-2xl hover:text-[hsl(var(--blog-yellow))] cursor-pointer w-fit">
            HTML & CSS foundations
          </div>
          <p className="text-sm sm:text-base text-[hsl(var(--blog-light-gray))]">
            These languages are the backbone of every website, defining
            structur, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/assets/blog/image-avatar.webp" />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <div className="font-extrabold text-sm">Greg Hooper</div>
        </div>
      </div>
    </div>
  );
}
