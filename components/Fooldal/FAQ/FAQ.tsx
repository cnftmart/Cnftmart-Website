import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { faqcollection } from "./FAQ Collection";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const FAQ = () => {
  const [open, setOpen] = React.useState<number>(0);
  const HandleOpen = (index: number) => {
    setOpen(open === index ? 0 : index);
  };
  return (
    <section id="faq">
      <h2 className="z-1 relative select-none pt-[5vw] text-center text-[1.8em] font-bold md:text-[2em] lg:text-[2.1em] xl:text-[2.3em] 2xl:text-[2.5em]">
        FAQ&apos;S
      </h2>
      <div className="mb-[10vw] flex flex-col items-center">
        {faqcollection.map((index, id) => (
          <Accordion
            draggable="false"
            open={open === index.id}
            key={id}
            className="blurtab my-3 flex max-w-[90%] lg:max-w-[80%] flex-col items-center py-2 text-[0.8em] text-[#FDC757] md:text-[1.1em] lg:mx-8 xl:text-[1.2em] 2xl:text-[1.3em]"
          >
            <AccordionHeader
              className="flex w-full items-center rounded-2xl py-2 md:py-4"
              onClick={() => HandleOpen(index.id)}
            >
              <div className="ml-4 text-[0.8em] md:text-[1.1em] xl:text-[1.2em] 2xl:text-[1.3em]">
                {index.question}
              </div>
              <span className="ml-auto">
                {open === index.id ? (
                  <ChevronDownIcon className="h-[2em] w-[2em] rotate-180" />
                ) : (
                  <ChevronDownIcon className="h-[2em] w-[2em]" />
                )}
              </span>
            </AccordionHeader>
            <AccordionBody className="mx-4 max-w-[95%] py-4 text-left md:text-[0.6em] xl:text-[0.7em] 2xl:text-[0.8em]">
              {index.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
