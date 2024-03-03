import { servicescollection } from "./Services Collection";
import useLoading from "../../../common/LoadingHook";
import { Transition } from "@headlessui/react";
import React from "react";

const Services: React.FC = () => {
  //Transition betöltése
  const { loading} = useLoading();
  const [transition, setTransition] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (loading) {
      setTransition(transition);
    } else {
      setTransition(!transition);
    }
  }, [loading]);
  return (
    <section id="services">
        <Transition
          show={transition}
          enter="transition duration-300 ease-in"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-100 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
          className="blurtab | mx-auto mb-[15vw] mt-[2vw] flex min-h-fit max-w-[90%] flex-wrap justify-between
          lg:max-w-[80%] lg:p-4"
        >    
          <div className="ml-6 flex flex-col md:ml-0 sm:w-full sm:items-center 2xl:ml-10 2xl:w-auto 2xl:items-start">
            <h2 className="mt-6 select-none text-[1.6em] text-[#FDC757] md:text-[1.8em] lg:text-[2em] xl:text-[2.1em] 2xl:text-[2.3em]">
              Services
            </h2>
            {servicescollection.map((index) => (
              <ul
                className="text-[0.7em] dark:text-[#FED682] md:text-[0.8em] lg:text-[0.85em] xl:text-[0.9em] 2xl:text-[1.1em]"
                role="list"
                key={index.id}
              >
                <li className="liitems | ml-3 mt-6">{index.title}</li>
              </ul>
            ))}
          </div>
          <div className="mx-auto my-4 h-full w-full rounded-[23px] border-[10px] border-[#FED682]
          sm:my-6 sm:h-auto sm:w-auto md:min-h-[800px] 2xl:mx-0 2xl:mr-10">
            <a
              className="twitter-timeline text-[0.7em] text-[#FDC757] text-center md:text-[0.8em] lg:text-[0.9em] xl:text-[1em] 2xl:text-[1.1em] rounded-[24px]"
              data-tweet-limit="5"
              data-chrome="noborders"
              data-lang="en"
              data-width="500"
              data-height="800"
              data-theme="light"
              aria-label="twitter-posts"
              href="https://twitter.com/cnftmart?ref_src=twsrc%5Etfw">
              Tweets by cnftmart
            </a>
          </div>
        </Transition> 
    </section>
  );
};

export default Services;
