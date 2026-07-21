import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import ThemeToggle from "@/components/common/ThemeToggle";
import carDesktop from "@/assets/images/car.png";
import carMobile from "@/assets/images/car-mobile.png";
import dot from "@/assets/images/white-dot.png";
import TelementryTrack from "@/components/dashboard/TelemetryTrack";

export default function NextCarDashboard() {
  return (
    <main className="min-h-screen overflow-hidden text-black dark:text-white max-w-[1894px] mx-auto w-full">
      <header className="absolute left-1/2 -translate-x-1/2 w-full flex items-center justify-between max-w-[1892px] px-[27px] py-[9.5px] z-[9]">
        <Link href="/" className="flex items-center">
          <Image
            className="bg-zinc-950/80"
            src={logo}
            alt="Frontend Assignment Logo"
            width={130}
            height={59}
            priority
          />
        </Link>
        <ThemeToggle />
      </header>
      <section className="relative h-[1115px] lg:h-[968px] overflow-hidden">
        <div className="rings absolute left-1/2 top-1/2 h-[1403px] w-[1800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-800" />

        <div className="rings absolute left-1/2 top-1/2 h-[1153px] w-[1348px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-800" />

        <div className="rings absolute left-1/2 top-1/2 h-[821px] w-[823px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-800" />

        <Image
          src={dot}
          alt="White Dot"
          className="absolute z-[-1] w-[560px] left-[50%] translate-x-[-50%] top-[48px]"
        />
        <picture>
          <source media="(min-width: 1024px)" srcSet={carDesktop.src} />
          <Image
            src={carMobile}
            alt="Car"
            className="absolute left-1/2 -translate-x-1/2  w-[200px] h-[200px] top-[445px] lg:w-[477px] lg:h-auto lg:top-0"
          />
        </picture>

        <div className="top-btn-nav absolute top-[95px] left-0 flex w-full justify-between px-[27px] z-[99]">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <g>
                <rect width="48" height="48" rx="24" fill="#191919" />
                <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.03" />
              </g>
              <path d="M22 29.25L16.75 24L22 18.75" stroke="white" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M31 24H17" stroke="white" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="flex gap-2.5">

            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g>
                  <rect width="48" height="48" rx="24" fill="#191919" />
                  <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.03" />
                </g>
                <path d="M24 26.375V16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M31.125 26.375V29.5417C31.125 29.9616 30.9582 30.3643 30.6613 30.6613C30.3643 30.9582 29.9616 31.125 29.5417 31.125H18.4583C18.0384 31.125 17.6357 30.9582 17.3387 30.6613C17.0418 30.3643 16.875 29.9616 16.875 29.5417V26.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.042 22.416L24.0003 26.3743L27.9587 22.416" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g>
                  <rect width="48" height="48" rx="24" fill="#191919" />
                  <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.03" />
                </g>
                <path d="M28.5 21C29.7426 21 30.75 19.9926 30.75 18.75C30.75 17.5074 29.7426 16.5 28.5 16.5C27.2574 16.5 26.25 17.5074 26.25 18.75C26.25 19.9926 27.2574 21 28.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.5 26.25C20.7426 26.25 21.75 25.2426 21.75 24C21.75 22.7574 20.7426 21.75 19.5 21.75C18.2574 21.75 17.25 22.7574 17.25 24C17.25 25.2426 18.2574 26.25 19.5 26.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28.5 31.5C29.7426 31.5 30.75 30.4926 30.75 29.25C30.75 28.0074 29.7426 27 28.5 27C27.2574 27 26.25 28.0074 26.25 29.25C26.25 30.4926 27.2574 31.5 28.5 31.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.4424 25.1323L26.5649 28.1173" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.5574 19.8823L21.4424 22.8673" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g>
                  <rect width="48" height="48" rx="24" fill="#191919" />
                  <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" strokeOpacity="0.03" />
                </g>
                <path d="M32.6737 21.5904L23.9654 30.2988L20.0071 26.3404" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full h-[968px]">
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className="col-span-12 col-start-1 flex items-center justify-end flex-col h-[250px]">
              <h1 className="font-shrikhand text-[22px] lg:text-[42px] xl:text-[60px] tracking-[1%] uppercase mt-[5] leading-[39px] mb-5">
                Engineered for <span className="text-red-500">passion</span>
              </h1>
              <div className="flex flex-col items-center justify-center">
                <p className="leading-[39px] text-[18px] tracking-[1%] text-black dark:text-white/70">Precision. Power. Performance</p>
                <span className="inline-block w-[26px] h-1 bg-[#BF0405]"></span>
              </div>

            </div>
            <div className="col-span-12 lg:col-span-2 col-start-1 lg:col-end-3 flex items-center">
              <div className="left-round-btn relative w-full">
                <div className="flex flex-row lg:flex-col gap-[20] items-end justify-center py-[15px]">

                  <button className="lg:pr-[28%] group relative tooltip-btn">
                    <Image
                      src="/icons/meter.svg"
                      alt="meter"
                      width={48}
                      height={48}
                    />
                    <span>Dashboard</span>
                  </button>
                  <button className="lg:pr-[38%] group relative tooltip-btn">
                    <Image
                      src="/icons/home.svg"
                      alt="home"
                      width={48}
                      height={48}
                    />
                    <span>Home</span>
                  </button>
                  <button className="lg:pr-[28%] group relative tooltip-btn">
                    <Image
                      src="/icons/setting.png"
                      alt="setting"
                      width={48}
                      height={48}
                    />
                    <span>Setting</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-4 col-start-1 col-end-5 lg:col-span-2 lg:col-start-4  lg:col-end-6 pr-[40px] 2xl:pr-[0]">
              <div className="text-right h-[342px] flex flex-col justify-evenly">
                <div className="lg:pr-[40px] mb-5">
                  <h2 className="font-bold text-[18px] lg:text-[30px] leading-[30px] whitespace-nowrap">352</h2>
                  <p className="text-[12px] lg:text-[16px] text-black dark:text-white/70 whitespace-nowrap">
                    Top Speed
                  </p>
                </div>

                <div className="lg:pr-[73px] mb-5">
                  <h2 className=" font-bold text-[18px] lg:text-[30px] leading-[30px] whitespace-nowrap">620</h2>
                  <p className="text-[12px] lg:text-[16px] text-black dark:text-white/70 whitespace-nowrap">
                    Horse Power
                  </p>
                </div>

                <div className="lg:pr-[40px]">
                  <h2 className=" font-bold text-[18px] lg:text-[30px] leading-[30px] whitespace-nowrap">780</h2>
                  <p className="text-[12px] lg:text-[16px] text-black dark:text-white/70 whitespace-nowrap">
                    Torque
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 col-start-9 col-end-13 lg:col-span-2 lg:col-start-8  lg:col-end-10 pl-[40px] 2xl:pl-[0]">
              <div className="text-left h-[342px] flex flex-col justify-evenly">
                <div className="lg:pl-[40px] mb-5">
                  <h2 className="font-bold text-[18px] lg:text-[30px] leading-[30px] whitespace-nowrap">3.2 Sec</h2>
                  <p className="text-[12px] lg:text-[16px] text-black dark:text-white/70 whitespace-nowrap">
                    0-100 KM/H
                  </p>
                </div>

                <div className="lg:pl-[73px] mb-5">
                  <h2 className=" font-bold text-[18px] lg:text-[30px] leading-[30px] whitespace-nowrap">2,450 KM</h2>
                  <p className="text-[12px] lg:text-[16px] text-black dark:text-white/70 whitespace-nowrap">
                    Oil Change
                  </p>
                </div>

                <div className="lg:pl-[40px]">
                  <h2 className=" font-bold text-[18px] lg:text-[30px] leading-[30px] whitespace-nowrap">520 KM</h2>
                  <p className="text-[12px] lg:text-[16px] text-black dark:text-white/70 whitespace-nowrap">
                    Range
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2 col-start-1 lg:col-start-11 lg:col-end-13 flex items-center">
              <div className="right-round-btn relative w-full">
                <div className="flex flex-row lg:flex-col gap-[20px] items-start justify-center py-[15px]">

                  <button className="lg:pl-[28%]">
                    <Image
                      src="/icons/chat.svg"
                      alt="chat"
                      width={48}
                      height={48}
                    />
                  </button>
                  <button className="lg:pl-[38%]">
                    <Image
                      src="/icons/paper.svg"
                      alt="paper"
                      width={48}
                      height={48}
                    />
                  </button>
                  <button className="lg:pl-[28%]">
                    <Image
                      src="/icons/tag.svg"
                      alt="tag"
                      width={48}
                      height={48}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 col-start-1 flex flex-col justify-end">
              <TelementryTrack />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
