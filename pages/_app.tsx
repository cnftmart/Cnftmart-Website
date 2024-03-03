import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import MobileHeader from "@/components/Header/Mobile/MobilHeader";
import Header from "@/components/Header/Header";
import FourOhFour from "./404";
import useLoading from "../common/LoadingHook";
import { Transition } from "@headlessui/react";
import Button from "@/components/Fooldal/Button/Button";
function CNFTMart({ Component, pageProps }: AppProps) {
  //Retrieved of background
  const [Background, SetBackground] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      SetBackground(Background);
    } else {
      SetBackground(!Background);
    }
  }, []);
  //Transition processing
  const { loading: load } = useLoading();
  const [transition, setTransition] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (load) {
      setTransition(transition);
    } else {
      setTransition(!transition);
    }
  }, [load]);
  return (
    <>
      <Head>
        <title>Cnftmart</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Transition
        show={transition}
        enter="transition duration-300 ease-in"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition duration-300 ease-out"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
      {Background ? (
        <div className="relative">
          <MobileHeader />
          <Header />
          <div className="invisible absolute inset-0 object-cover md:visible">
            <Image
              src="/images/Background.png"
              priority={true}
              fill
              sizes="100vw"
              draggable={false}
              alt="Background"
            />
          </div>
          <Component {...pageProps} />
        </div>
      ) : (
        <FourOhFour />
      )}
      </Transition>
      <Button />
    </>
  );
}

export default CNFTMart;
