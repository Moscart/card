import React from "react";
import styles from "./nft.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NFTPage() {
  return (
    <main
      className={cn(
        "min-h-screen flex justify-center items-center p-6",
        styles.background
      )}
    >
      <div
        className={cn(
          "rounded-2xl p-6 max-w-[22rem] flex flex-col gap-4 shadow-2xl",
          styles.card
        )}
      >
        <div className="relative aspect-square rounded-lg overflow-hidden group hover:cursor-pointer">
          <Image
            src={"/assets/nft/image-equilibrium.jpg"}
            alt="Equilibrium"
            fill
          />
          <div
            className={cn(
              "aspect-square absolute w-full opacity-0 group-hover:opacity-50 transition-all duration-500",
              styles.background_cyan
            )}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <svg
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h48v48H0z" />
                <path
                  d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                  fill="#FFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          className={cn(
            "text-white text-[1.4rem] font-semibold hover:cursor-pointer",
            styles.cyan
          )}
        >
          Equilibrium #3429
        </div>
        <p className={cn("font-light sm:text-lg", styles.text)}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between items-center">
          <div
            className={cn(
              "font-semibold flex items-center gap-1.5",
              styles.eth
            )}
          >
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            0.041 ETH
          </div>

          <div className={cn("flex items-center gap-1.5", styles.text)}>
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            3 days left
          </div>
        </div>
        <Separator className={styles.separator} />
        <div className="flex items-center gap-4">
          <Avatar className="border aspect-square w-8 h-8">
            <AvatarImage src="/assets/nft/image-avatar.png" />
            <AvatarFallback>JW</AvatarFallback>
          </Avatar>
          <div className={cn("text-[0.9rem] sm:text-base", styles.text)}>
            Createion of{" "}
            <span
              className={cn("text-white hover:cursor-pointer", styles.cyan)}
            >
              Jules Wyvern
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
