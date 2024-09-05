import { Button } from "@/components/ui/button";
import React from "react";

export default function SummaryPage() {
  return (
    <div className="min-h-screen font-medium md:flex md:justify-center md:items-center md:p-10">
      <div className="max-w-md md:max-w-full mx-auto md:flex md:h-fit md:rounded-[2rem] md:overflow-hidden md:shadow-xl md:shadow-[hsl(var(--pale-blue))]">
        <div className="text-white bg-gradient-to-t from-[hsl(var(--light-royal-blue))] to-[hsl(var(--light-slate-blue))] rounded-b-[2rem] md:rounded-[2rem] md:max-w-md p-10 pt-5 md:pt-9 md:p-12 flex flex-col gap-5 md:gap-9">
          <div className="text-[hsl(var(--light-lavender))] font-bold text-center text-lg md:text-2xl">
            Your Result
          </div>
          <div className="aspect-square bg-gradient-to-b from-[hsl(var(--violet-blue))] via-[hsl(var(--persian-blue))]/40 to-transparent p-10 rounded-full w-[136px] md:w-48 mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] text-center grid gap-1">
              <div className="font-extrabold text-6xl md:text-7xl">76</div>
              <div className="font-bold text-[hsl(var(--light-lavender))]/50 md:text-lg">
                of 100
              </div>
            </div>
          </div>
          <div className="text-center grid gap-2 md:gap-4">
            <div className="font-bold text-2xl md:text-3xl">Great</div>
            <p className="text-[hsl(var(--light-lavender))] md:text-lg md:leading-6">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="p-6 px-8 md:pt-9 md:px-10 text-[hsl(var(--dark-gray-blue))] flex flex-col gap-7 md:w-full">
          <div className="font-bold text-lg md:text-2xl md:font-extrabold">
            Summary
          </div>
          <div className="grid gap-4 md:text-lg">
            <div className="bg-[hsl(var(--light-red))]/10 rounded-lg p-3.5">
              <div className="font-bold flex justify-between">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#F55"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                      />
                    </svg>
                  </div>
                  <div className="text-[hsl(var(--light-red))]">Reaction</div>
                </div>
                <div className="flex gap-1.5 font-extrabold">
                  <div className="">80</div>
                  <div className="text-[hsl(var(--dark-gray-blue))]/50">/</div>
                  <div className="text-[hsl(var(--dark-gray-blue))]/50">
                    100
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[hsl(var(--orange-yellow))]/10 rounded-lg p-3.5">
              <div className="font-bold flex justify-between">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#FFB21E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                      />
                      <path
                        stroke="#FFB21E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                      />
                      <path
                        stroke="#FFB21E"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                      />
                    </svg>
                  </div>
                  <div className="text-[hsl(var(--orange-yellow))]">Memory</div>
                </div>
                <div className="flex gap-1.5 font-extrabold">
                  <div className="">92</div>
                  <div className="text-[hsl(var(--dark-gray-blue))]/50">/</div>
                  <div className="text-[hsl(var(--dark-gray-blue))]/50">
                    100
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[hsl(var(--green-teal))]/10 rounded-lg p-3.5">
              <div className="font-bold flex justify-between">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#00BB8F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                      />
                    </svg>
                  </div>
                  <div className="text-[hsl(var(--green-teal))]">Verbal</div>
                </div>
                <div className="flex gap-1.5 font-extrabold">
                  <div className="">61</div>
                  <div className="text-[hsl(var(--dark-gray-blue))]/50">/</div>
                  <div className="text-[hsl(var(--dark-gray-blue))]/50">
                    100
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[hsl(var(--cobalt-blue))]/10 rounded-lg p-3.5">
              <div className="font-bold flex justify-between">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#1125D6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                      />
                      <path
                        stroke="#1125D6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                      />
                    </svg>
                  </div>
                  <div className="text-[hsl(var(--cobalt-blue))]">Visual</div>
                </div>
                <div className="flex gap-1.5 font-extrabold">
                  <div className="">72</div>
                  <div className="text-[hsl(var(--dark-gray-blue))]/50">/</div>
                  <div className="text-[hsl(var(--dark-gray-blue))]/50">
                    100
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="mt-3 h-14 rounded-full bg-[hsl(var(--dark-gray-blue))] font-bold text-lg hover:bg-gradient-to-t hover:from-[hsl(var(--light-royal-blue))] hover:to-[hsl(var(--light-slate-blue))]"
            size={"lg"}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
