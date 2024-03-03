import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { promotecollection } from "./PromoteSlideShow";

const PromoteLogic = () => {
  const [slide, setSlide] = React.useState<number>(0);
  const NextSlide = () => {
    setSlide(slide === promotecollection.length - 1 ? 0 : slide + 1);
  };
  const PrevSlide = () => {
    setSlide(slide === 0 ? promotecollection.length - 1 : slide - 1);
  };
  React.useEffect(() => {
    let slider = setInterval(() => NextSlide(), 5000);
    return () => clearInterval(slider);
  }, [slide]);
  return (
    <div
      className="lg:mr-18 relative z-[49] ml-[5vw] mb-[10vw] flex h-[72vw] w-[60vw] items-end justify-center self-center object-contain pb-4
      md:mr-12 md:h-[30vw] md:w-[40vw] "
    >
      <ChevronRightIcon
        onClick={PrevSlide}
        className="absolute left-0 top-[38%] z-[50] h-10 w-10 rotate-[1.2deg] -scale-x-100
            cursor-pointer text-white hover:opacity-50 md:left-1 xl:h-12 xl:w-12
            2xl:h-14 2xl:w-14"
      />
      <ChevronRightIcon
        onClick={NextSlide}
        className="absolute right-0 top-[42%] z-[50] h-10 w-10 rotate-[4.8deg] cursor-pointer
            text-white hover:opacity-50 md:right-1 xl:h-12 xl:w-12 2xl:h-14
            2xl:w-14"
      />
      {promotecollection.map((index) => (
        <div
          key={index.id}
          className={`${
            index.id === slide
              ? "duration-300 ease-in"
              : "opacity-0 duration-300 ease-in"
          }
          `}
        >
          {index.id === slide && (
            <a
              href={index.promolink}
              aria-label={index.alt}
              target="_blank"
              title={index.alt}
            >
              <Image
                src={index.image}
                fill
                sizes="100vw"
                draggable={false}
                priority={true}
                loading="eager"
                className="inset-0 rotate-[2.4deg] rounded-[40px] border-[6px] border-white md:rounded-[45px]
                  lg:rounded-[55px] lg:border-[7px] xl:rounded-[65px] xl:border-[8px] 2xl:rounded-[75px]"
                alt={index.alt}
              />
            </a>
          )}
        </div>
      ))}
      {/* Dots at the bottom */}
      <div className="flex rotate-[2.4deg] space-x-4 sm:space-x-5 lg:space-x-5 xl:space-x-6 2xl:space-x-7">
        {promotecollection.map((index) => (
          <span
            key={index.id}
            className={`${
              slide === index.id
                ? "bg-[#B19559] duration-300 ease-in"
                : "bg-[#FED682] duration-300 ease-in"
            } h-3 w-3 cursor-pointer
            rounded-[50%] hover:opacity-50 md:h-2 md:w-2 lg:h-3 lg:w-3 xl:h-4 xl:w-4 2xl:h-4 2xl:w-4`}
            onClick={() => setSlide(index.id)}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default PromoteLogic;
