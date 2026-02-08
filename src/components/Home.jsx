import React from "react";

export default function Home({ onExplore }) {
  return (
    <div className="py-32 px-[165px] flex justify-between min-h-screen items-end  max-xl:px-10 max-xl:flex-col max-xl:items-center gap-[66px] max-sm:p-6">
      <div className="w-[540px] flex flex-col gap-6 h-[343px] max-xl:text-center max-xl:w-[512px] max-sm:w-[327px]">
        <p className="text-[#D0D6F9] font-barlow-condensed text-[28px] tracking-[4px] max-sm:text-[16px]">SO, YOU WANT TO TRAVEL TO</p>
        <h2 className="font-bellefair text-[144px] max-sm:text-[80px]">SPACE</h2>
        <p className="text-[#D0D6F9] font-barlow text-[18px] max-xl:text-[16px] max-sm:text-[15px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="w-[540px] flex justify-end items-center max-xl:justify-center max-xl:items-end">
        <div onClick={onExplore} className="text-black bg-white w-[272px] h-[272px] rounded-full flex justify-center items-center font-bellefair text-[32px] hover:cursor-pointer max-sm:w-[144px] max-sm:h-[144px] max-sm:text-[18px] hover:outline-[88px] outline-white/10 outline hover:text-black/50 transition-all duration-300">
            EXPLORE
        </div>
      </div>
    </div>
  );
}
