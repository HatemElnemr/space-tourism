import React, { useState } from "react";
import date from "../data.json";
import Heading from "./Heading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"

export default function CrewPage() {
  const [crewIndex, setCrewIndex] = useState(0);
  const crewMember = date.crew[crewIndex];

  function handleChangeCrewMember(index) {
    setCrewIndex(index);
  }

  return (
    <div className="py-12 px-[165px] max-xl:p-10 max-sm:p-6">
      <Heading pageNumber="02" title="MEET YOUR CREW" />
      <div className="mt-6 flex gap-8 justify-center w-full max-xl:flex-col  max-xl:items-center max-sm:items-center">
        <div className="w-1/2 flex flex-col gap-10 h-[734px] max-xl:w-[512px] max-xl:text-center max-xl:pt-10 max-xl:h-fit max-sm:w-[327px] ">
          <div className="flex h-[631px] flex-col justify-center gap-6 max-xl:h-[231px] max-sm:h-[245px]">
            <div className="flex flex-col gap-4 font-bellefair uppercase">
              <p className="text-[32px] text-white/50 max-xl:text-[24px] max-sm:text-[18px]">{crewMember.role}</p>
              <h2 className="text-[56px] text-white max-xl:text-[40px] max-sm:text-[24px]">{crewMember.name}</h2>
            </div>
            <p className="font-barlow text-[18px] text-[#D0D6F9] w-full max-xl:text-[16px] max-sm:text-[15px]" style={{lineHeight: "180%"}}>
                {crewMember.bio}
            </p>
          </div>
          <ul className="pb-12 flex gap-10 justify-start max-xl:justify-center max-xl:pb-0">
            {date.crew.map((member, index) => <li key={member.name} onClick={() => handleChangeCrewMember(index)} className={`w-[15px] h-[15px] max-xl:w-[10px] max-xl:h-[10px] rounded-full ${crewIndex === index ? "bg-white" : "bg-white/[0.17]"} hover:bg-white`}></li>)}
          </ul>
        </div>
        <div className="relative py-[30px] w-1/2 max-xl:w-full flex justify-center max-xl:py-0 max-sm:py-[5px]">
          <LazyLoadImage
            key={crewMember.name}
              src={crewMember.images.png} // the source of the image
              placeholderSrc={crewMember.images.webp}
              alt="Crew Member" // alternative text for the image
              effect="blur" // the blur effect
              width="100%"
              height="100%"
              loading="lazy"
            className="[mask-image:linear-gradient(to_bottom,black_90%,transparent_99%)] w-full h-[676px] max-xl:w-[447px] max-xl:mx-auto max-xl:h-[560px] max-sm:w-[271px] max-sm:h-[340px]"
          />
        </div>
      </div>
    </div>
  );
}
