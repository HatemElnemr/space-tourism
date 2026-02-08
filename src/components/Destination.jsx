import React, { useState } from "react";
import date from "../data.json";
import Heading from "./Heading";

export default function Destination() {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const destination = date.destinations[destinationIndex];

  function handleChangeDestination(index) {
    setDestinationIndex(index);
  }
  return (
    <div className="py-12 px-[165px] max-xl:p-10 max-sm:p-6">
      <Heading pageNumber="01" title="pick your destination" />
      <div className="mt-6 flex gap-8 justify-center w-[1100px] mx-auto max-xl:w-[688px] max-xl:flex-col max-sm:w-[327px]">
        <div className="h-[734px] flex justify-center items-center transition-all duration-300 max-xl:h-[384px] max-sm:h-[203px]">
          <img
            src={destination.images.png}
            alt="Destination"
            className="w-[480px] h-[480px] max-xl:w-[300px] max-xl:h-[300px] max-sm:w-[150px] max-sm:h-[150px]"
          />
        </div>
        <div className="flex flex-col gap-10 px-[47px] py-[133px] w-1/2 max-xl:text-center max-xl:w-full max-xl:py-[11.5px] max-xl:px-[87px] max-xl:gap-6 max-sm:p-0">
          <ul className="flex gap-8 justify-start w-full max-xl:justify-center">
            {date.destinations.map((destination, index) => (
              <div
                key={destination.name}
                className="flex flex-col gap-[10px] w-fit"
              >
                <li
                  className={`${destinationIndex === index ? "text-white" : "text-[#D0D6F9]"} text-[16px] font-barlow-condensed tracking-[2px] hover:cursor-pointer hover:text-white max-sm:text-[14px]`}
                  onClick={() => handleChangeDestination(index)}
                >
                  {destination.name}
                </li>
                {destinationIndex === index && (
                  <div className="bg-white h-[3px] w-full"></div>
                )}
              </div>
            ))}
          </ul>
          <div className="flex flex-col gap-4 w-[445px] max-xl:w-full">
            <h2 className="text-[96px] font-bellefair uppercase max-xl:text-[80px] max-sm:text-[56px]">{destination.name}</h2>
            <p className="text-[18px] font-barlow text-[#D0D6F9] max-xl:text-[16px] max-sm:text-[15px]">{destination.description}</p>
          </div>
          <div className="bg-white/25 h-[1px] w-full"></div>
          <div className="flex gap-6 w-full max-sm:flex-col max-sm:items-center">
            <div className="w-1/2 flex flex-col gap-3">
                <span className="text-[#D0D6F9] text-[14px] font-barlow-condensed tracking-[2px]">AVG. DISTANCE</span>
                <span className="uppercase text-[28px] font-bellefair" style={{
                    lineHeight: '180%',
                }}>{destination.distance}</span>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
                <span className="uppercase text-[#D0D6F9] text-[14px] font-barlow-condensed tracking-[2px]">Est. travel time</span>
                <span className="uppercase text-[28px] font-bellefair">{destination.travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
