import PromoteLogic from "./PromoteLogic";
import useLoading from "../../../common/LoadingHook";
import { Transition } from "@headlessui/react";
import React from "react";

const Main: React.FC = () => {
  const { loading } = useLoading();
  const [transition, setTransition] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (loading) {
      setTransition(transition);
    } else {
      setTransition(!transition);
    }
  }, [loading]);
  return (
    <section>
      <Transition
          show={transition}
          enter="transition duration-500 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-100 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
          className="relative z-50 flex min-h-[30vw] select-none pt-16 md:pt-0"
          as="div"
        >
      <div className="mt-[5vw] mb-[2vw] flex flex-col justify-between md:w-full md:flex-row">
        <div className="ml-[7vw] mb-[10vw] flex flex-col justify-center md:w-full">
          <h1 className="text-[3em] md:text-[3.5em] lg:text-[3.7em] xl:text-[4.1em] 2xl:text-[4.4em]">
            Cnftmart
          </h1>
          <p className="max-w-[70%] md:max-w-[60%] md:text-[1em] lg:max-w-[50%] lg:text-[1.05em] xl:max-w-[50%] xl:text-[1.1em] 2xl:max-w-[45%] 2xl:text-[1.1em]">
            Selfmade millionare, cardano nft collector, Daily content creator,
            influencer
          </p>
          <a href="#footer">
            <button
              id="ContactButton"
              aria-label="Contact"
              className="my-4 cursor-pointer rounded-[20px] border-none bg-[#252627] py-3 px-12 text-white
            transition duration-200 hover:bg-white hover:text-[#252627]
          md:text-[0.8em] lg:text-[0.9em] xl:text-[1em] 2xl:text-[1.1em]"
            >
              Contact
            </button>
          </a>
        </div>
        <PromoteLogic />
      </div>
      </Transition>
    </section>
  );
};

export default Main;
