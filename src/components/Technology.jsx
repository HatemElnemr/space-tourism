import React, { useState } from "react";
import Heading from "./Heading";
import data from "../data.json";

export default function Technology() {
  const [techIndex, setTechIndex] = useState(0);
  const technology = data.technology[techIndex];

  function handleChangeTechnology(index) {
    setTechIndex(index);
  }

  return (
    <div className="py-12 pl-[165px] w-full h-fit max-xl:p-10 max-sm:p-6 max-sm:pb-12">
      <Heading pageNumber="03" title="SPACE LAUNCH 101" />

      <div className="mt-6 w-full flex gap-8 max-xl:flex-col max-xl:pt-16 max-xl:text-center">
        <div className="w-screen h-[357px] xl:hidden ">
          <img
            src={technology.images.landscape}
            alt="Technology"
            className="w-screen max-xl:h-[357px] absolute left-[2px] max-sm:h-[258px] "
          />
        </div>
        <div className="flex items-center gap-16 max-xl:flex-col max-xl:gap-10">
          <ul className="flex flex-col gap-8 max-xl:flex-row max-xl:gap-4">
            {data.technology.map((tech, index) => (
              <li
                onClick={() => handleChangeTechnology(index)}
                className={`flex justify-center items-center w-[80px] h-[80px] max-xl:w-[56px] max-xl:h-[56px] max-sm:w-[40px] max-sm:h-[40px] rounded-full text-[32px] max-xl:text-[24px] max-sm:text-[18px] font-bellefair hover:cursor-pointer ${techIndex === index ? "bg-white text-black" : "border border-white/25 hover:border-white"}`}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-6 w-[491px] max-xl:w-[512px] max-xl:gap-4 max-sm:max-w-[327px]">
            <div className="flex flex-col gap-4">
              <p className="font-bellefair text-[32px] max-xl:text-[24px] max-sm:text-[18px] text-white/50">
                THE TERMINOLOGY…
              </p>
              <h2 className="uppercase text-[56px] max-xl:text-[40px] max-sm:text-[24px] font-bellefair">
                {technology.name}
              </h2>
            </div>
            <p
              className="text-[18px] max-xl:text-[16px] max-sm:text-[15px] font-barlow text-[#D0D6F9]"
              style={{ lineHeight: "180%" }}
            >
              {technology.description}
            </p>
          </div>
        </div>
        <div className="py-[67px] max-xl:hidden">
          <img
            src={technology.images.portrait}
            alt="Technology"
            className="h-[600px] w-[608px]"
          />
        </div>
      </div>
    </div>
  );
}
