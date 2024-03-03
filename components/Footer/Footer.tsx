import dynamic from "next/dynamic";
import Image from "next/image";
const Navigation = dynamic(() => import("./Navigation"));

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="relative z-50 select-none overflow-y-hidden bg-[#252627] pt-10 text-[#FDC757]"
    >
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0">
        <div className="ml-10 flex flex-col">
          <h1 className="text-[2.5em] md:w-full md:text-[2.8em] lg:text-[3em] xl:text-[3.2em] 2xl:text-[3.5em]">
            Cnftmart
          </h1>
          <p className="max-w-[60%] text-[0.7em] leading-none text-white md:w-full lg:w-auto lg:max-w-[80%] lg:text-[0.8em] xl:max-w-[75%] xl:text-[0.9em] 2xl:max-w-[70%] 2xl:text-[1em]">
            Selfmade millionare, cardano nft collector, Daily content creator,
            influencer
          </p>
        </div>
        <Navigation />
      </div>
      <div className="mx-auto mt-8 mb-4 flex justify-center text-[0.6em] italic lg:text-[0.8em] xl:text-[0.9em] 2xl:text-[1em]">
        Copyright &#169; 2023 | All rights reserved by Cnftmart
      </div>
    </footer>
  );
};

export default Footer;
