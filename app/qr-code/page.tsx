import Image from "next/image";
import React from "react";

export default function QRPage() {
  return (
    <div className="bg-[hsl(var(--qr-light-slate))] min-h-screen flex justify-center items-center p-6">
      <div className="max-w-xs bg-white rounded-[20px] overflow-hidden p-4 pb-10 text-[hsl(var(--qr-dark-slate))] flex flex-col gap-6">
        <div className="relative w-full aspect-square rounded-[10px] overflow-hidden">
          <Image src={"/assets/qr-code/image-qr-code.png"} alt="QR Code" fill />
        </div>
        <div className="flex flex-col justify-center gap-4 px-4 text-center">
          <div className="font-bold text-[1.375rem]">
            Improve your front-end skills by building projects
          </div>
          <p className="text-[hsl(var(--qr-slate))] text-[0.9375rem] tracking-wide">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
