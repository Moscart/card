"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LoaderPinwheel } from "lucide-react";
import React from "react";

export interface AdviceType {
  slip: Slip;
}

export interface Slip {
  id: number;
  advice: string;
}

export default function AdvicePage() {
  const fetchAdvice = async (): Promise<AdviceType> => {
    return axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => res.data);
  };

  const { data, refetch, isFetching } = useQuery({
    queryKey: ["advice"],
    queryFn: fetchAdvice,
  });

  return (
    <main className="min-h-screen bg-[hsl(var(--advice-dark-blue))] flex justify-center items-center p-4">
      <div className="bg-[hsl(var(--advice-dark-grayish))] rounded-xl px-6 pb-16 pt-10 md:px-10 md:pt-12 md:pb-[72px] relative text-center max-w-sm md:max-w-[550px] w-full">
        <div className={cn(isFetching && "hidden")}>
          <div className="text-[hsl(var(--advice-neon-green))] text-[0.6875rem] md:text-xs uppercase font-semibold tracking-[0.2rem]">
            Advice #{data?.slip.id}
          </div>
          <div className="font-extrabold text-[hsl(var(--advice-light-cyan))] text-2xl md:text-[1.75rem] py-6 md:pb-10 md:leading-10">
            “{data?.slip.advice}”
          </div>
          <div className="flex justify-center">
            <svg
              width="295"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden"
            >
              <g fill="none" fillRule="evenodd">
                <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                <g transform="translate(138)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
            <svg
              width="444"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <g fill="none" fillRule="evenodd">
                <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                <g transform="translate(212)" fill="#CEE3E9">
                  <rect width="6" height="16" rx="3" />
                  <rect x="14" width="6" height="16" rx="3" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div
          className={cn(
            "font-extrabold flex justify-center items-center h-52",
            !isFetching && "hidden"
          )}
        >
          <LoaderPinwheel
            className="animate-spin text-[hsl(var(--advice-neon-green))]"
            size={40}
          />
        </div>
        <Button
          size={"icon"}
          className="rounded-full w-auto h-auto p-5 bg-[hsl(var(--advice-neon-green))] hover:bg-[hsl(var(--advice-neon-green))] absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 hover:shadow-[0_0_50px_0_hsl(var(--advice-neon-green))] transition-all duration-500"
          onClick={() => refetch()}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </Button>
      </div>
    </main>
  );
}
