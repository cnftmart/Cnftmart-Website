import React from "react";
import Image from "next/image";
import { tyohcollection } from "./TyohCollection";

const TYOH: React.FC = () => {
  return (
    <section id="tyoh">
      <div className="blurtab2 | mx-auto my-[5vw] flex min-h-fit max-w-[90%] flex-col justify-between bg-[#8C6239] lg:max-w-[80%]">
        <div className="tyoh | grid h-full w-full items-center">
          <div className="row-span-2">
            <Image
              src="/images/Detail1.png"
              priority={true}
              height={500}
              width={500}
              draggable={false}
              alt="detail"
            />
          </div>
          <div className="self-start pt-[4vw]">
            <h2 className="select-none text-center text-[1.2em] font-bold md:text-[1.4em] lg:text-[1.6em] xl:text-[2.2em] 2xl:text-[2.4em]">
              The Yard of Horror
            </h2>
          </div>
          <div className="tyohlist | col-start-2 row-start-2 mt-[5vw]">
            <ul role="list" className="flex flex-col gap-2 pb-8 lg:pb-0">
              {tyohcollection.map((item) => (
                <React.Fragment key={item.id}>
                  {item.inside ? (
                    <li className={` list-[square] list-inside | ${item.classNames} ml-8`}>{item.title}</li>
                  ) : (
                    <li className={` list-[square] list-inside | ${item.classNames}`}>{item.title}</li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="row-span-2 pb-6">
            <Image
              src="/images/Detail2.png"
              priority={true}
              height={500}
              width={500}
              draggable={false}
              alt="detail2"
              className="pt-[10vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TYOH;
