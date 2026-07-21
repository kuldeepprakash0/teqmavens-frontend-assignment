"use client";
import Image from "next/image";
import curve from "@/assets/images/dashed-curve.svg";

export default function TelemetryTrack() {
  return (
    <div className="w-full overflow-x-auto scrollbar-none">
      <div className="relative mt-auto h-[268px] min-w-[800px] w-full">
        <Image src={curve} alt="track" className="curve-bg h-[268px] min-w-[800px]" />

        <div className="absolute left-0 top-0 z-20 flex h-full w-full justify-between px-10">
          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center mt-auto">
            <span className="transition-all duration-300"></span>
            <div className="my-2.5 w-[1px] h-[16px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[16px] font-medium uppercase tracking-[0.5px] transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 01
            </div>
            <div className="text-[17px] font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              Speed Zone
            </div>
          </div>

          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center mt-auto">
            <span className="transition-all duration-300"></span>
            <div className="my-2.5 w-[1px] h-[30px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[16px] font-medium uppercase tracking-[0.5px] transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 02
            </div>
            <div className="text-[17px] font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              Acceleration Zone
            </div>
          </div>

          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center mt-auto">
            <span className="transition-all duration-300"></span>
            <div className="my-2.5 w-[1px] h-[55px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[16px] font-medium uppercase tracking-[0.5px] transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 03
            </div>
            <div className="text-[17px] font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              Technical Section
            </div>
          </div>

          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center mt-auto">
            <span className="transition-all duration-300"></span>
            <div className="my-2.5 w-[1px] h-[71px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[16px] font-medium uppercase tracking-[0.5px] transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 04
            </div>
            <div className="text-[17px] font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              High Speed Zone
            </div>
          </div>

          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center mt-auto">
            <span className="transition-all duration-300"></span>
            <div className="my-2.5 w-[1px] h-[100px] 2xl:h-[130px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[16px] font-medium uppercase tracking-[0.5px] transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 05
            </div>
            <div className="text-[17px] font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              Final Corner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
