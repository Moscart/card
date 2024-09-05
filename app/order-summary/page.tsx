import React from "react";
import Illustration from "@/public/assets/order-summary/illustration-hero.svg";
import BgMobile from "@/public/assets/order-summary/pattern-background-mobile.svg";
import BgDesktop from "@/public/assets/order-summary/pattern-background-desktop.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OrderPage() {
  return (
    <div className="bg-[hsl(var(--order-pale-blue))] min-h-screen flex justify-center items-center p-6 relative z-10">
      <Image
        src={BgMobile}
        alt="Background"
        className="h-[50vh] sm:hidden w-screen absolute top-0 left-0 object-cover -z-10 object-bottom"
      />
      <Image
        src={BgDesktop}
        alt="Background"
        className="h-[50vh] hidden sm:block w-screen absolute top-0 left-0 object-cover -z-10 object-bottom"
      />
      <div className="max-w-xs sm:max-w-md bg-white rounded-[20px] overflow-hidden text-[hsl(var(--order-dark-blue))] font-medium">
        <div className="relative">
          <Image
            src={Illustration}
            alt="Illustration"
            className="w-full h-full"
          />
        </div>
        <div className="px-6 sm:px-12 py-7 sm:py-12 text-center flex flex-col gap-6">
          <div className="px-4 flex flex-col gap-4">
            <div className="font-black text-[1.375rem] sm:text-3xl">
              Order Summary
            </div>
            <p className="text-[hsl(var(--order-desaturated-blue))] text-sm sm:text-base leading-6">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </div>
          <div className="bg-[hsl(var(--order-very-pale-blue))] rounded-[10px] flex justify-between p-4 sm:p-6 items-center">
            <div className="flex gap-6">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                    <path
                      fill="#717FA6"
                      fillRule="nonzero"
                      d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                    />
                  </g>
                </svg>
              </div>
              <div className="grid text-sm sm:text-base">
                <div className="font-black">Annual Plan</div>
                <div className="font-bold text-[hsl(var(--order-desaturated-blue))]">
                  $59.99/year
                </div>
              </div>
            </div>
            <div className="text-xs sm:text-sm font-black text-[hsl(var(--order-bright-blue))] hover:text-[hsl(var(--order-bright-blue))]/70 underline hover:no-underline cursor-pointer">
              Change
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 items-center sm:mt-4">
            <Button className="bg-[hsl(var(--order-bright-blue))] hover:bg-[hsl(var(--order-bright-blue))]/70 font-black tracking-wider h-[52px] w-full rounded-[10px] shadow-xl shadow-[hsl(var(--order-bright-blue))]/30">
              Proceed to Payment
            </Button>
            <div className="text-[hsl(var(--order-desaturated-blue))] font-black hover:text-[hsl(var(--order-dark-blue))] w-fit cursor-pointer">
              Cancel Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
