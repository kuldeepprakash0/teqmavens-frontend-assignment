"use client";

export default function TelemetryTrack() {
  return (
    <div className="w-full overflow-x-auto scrollbar-none">
      <div className="relative mt-auto h-[220px] min-w-[800px] w-full">
        <svg
          className="absolute left-0 top-0 z-10 h-[160px] w-full"
          viewBox="0 0 1000 150"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff2a2a" stopOpacity="0.25"></stop>
              <stop offset="100%" stopColor="#ff2a2a" stopOpacity="0.0"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,130 C 100,130 110,120 110,120 C 220,120 325,105 325,105 C 430,105 540,90 540,90 C 650,90 755,75 755,75 C 865,75 920,45 920,45 L 1000,38 L 1000,150 L 0,150 Z"
            fill="url(#areaGradient)"
          ></path>
          <path
            d="M 0,130 C 100,130 110,120 110,120 C 220,120 325,105 325,105 C 430,105 540,90 540,90 C 650,90 755,75 755,75 C 865,75 920,45 920,45 L 1000,38"
            fill="none"
            stroke="#ff2a2a"
            strokeWidth="2.5"
            strokeDasharray="6,4"
          ></path>
        </svg>

        <div className="absolute left-0 top-0 z-20 flex h-full w-full justify-between px-10">
          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center select-none mt-auto">
            <span className="h-[14px] w-[14px] rounded-full border-[3px] border-[#0b0b0c] transition-all duration-300 bg-[#4a4a4e] ring-2 ring-[#4a4a4e] group-hover:bg-[#ff2a2a] group-hover:ring-[#ff2a2a] group-hover:shadow-[0_0_15px_#ff2a2a]"></span>
            <div className="my-2.5 w-[1px] h-[22px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[11px] font-medium uppercase tracking-[0.5px] mb-1 transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 01
            </div>
            <div className="text-xs font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              Speed Zone
            </div>
          </div>

          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center select-none mt-auto">
            <span className="h-[14px] w-[14px] rounded-full border-[3px] border-[#0b0b0c] transition-all duration-300 bg-[#4a4a4e] ring-2 ring-[#4a4a4e] group-hover:bg-[#ff2a2a] group-hover:ring-[#ff2a2a] group-hover:shadow-[0_0_15px_#ff2a2a]"></span>
            <div className="my-2.5 w-[1px] h-[40px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[11px] font-medium uppercase tracking-[0.5px] mb-1 transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 02
            </div>
            <div className="text-xs font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              Acceleration Zone
            </div>
          </div>

          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center select-none mt-auto">
            <span className="h-[14px] w-[14px] rounded-full border-[3px] border-[#0b0b0c] transition-all duration-300 bg-[#4a4a4e] ring-2 ring-[#4a4a4e] group-hover:bg-[#ff2a2a] group-hover:ring-[#ff2a2a] group-hover:shadow-[0_0_15px_#ff2a2a]"></span>
            <div className="my-2.5 w-[1px] h-[59px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[11px] font-medium uppercase tracking-[0.5px] mb-1 transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 03
            </div>
            <div className="text-xs font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              Technical Section
            </div>
          </div>

          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center select-none mt-auto">
            <span className="h-[14px] w-[14px] rounded-full border-[3px] border-[#0b0b0c] transition-all duration-300 bg-[#4a4a4e] ring-2 ring-[#4a4a4e] group-hover:bg-[#ff2a2a] group-hover:ring-[#ff2a2a] group-hover:shadow-[0_0_15px_#ff2a2a]"></span>
            <div className="my-2.5 w-[1px] h-[71px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[11px] font-medium uppercase tracking-[0.5px] mb-1 transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 04
            </div>
            <div className="text-xs font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              High Speed Zone
            </div>
          </div>

          <div className="group flex w-[120px] cursor-pointer flex-col items-center text-center select-none mt-auto">
            <span className="h-[14px] w-[14px] rounded-full border-[3px] border-[#0b0b0c] transition-all duration-300 bg-[#4a4a4e] ring-2 ring-[#4a4a4e] group-hover:bg-[#ff2a2a] group-hover:ring-[#ff2a2a] group-hover:shadow-[0_0_15px_#ff2a2a]"></span>
            <div className="my-2.5 w-[1px] h-[107px] border-l border-dashed transition-all duration-300 border-[#3a3a3c] group-hover:border-[#ff2a2a] group-hover:opacity-70"></div>
            <div className="text-[11px] font-medium uppercase tracking-[0.5px] mb-1 transition-all duration-300 text-[#8e8e93] group-hover:text-white group-hover:font-bold">
              Lap 05
            </div>
            <div className="text-xs font-medium whitespace-nowrap transition-all duration-300 text-[#555559] group-hover:text-[#a1a1a6]">
              Final Corner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
