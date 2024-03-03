const Tab = dynamic(() => import("../Header/Tab"));
import { tabcollection } from "./Tab Collection";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useLoading from "../../common/LoadingHook";
import { Transition } from "@headlessui/react";

const Header: React.FC = () => {
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
    <header id="header">
       <Transition
          show={transition}
          enter="transition duration-500 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-100 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
          className="relative z-50 hidden select-none items-center justify-between pb-3 pt-1 md:flex"
          as="div"
        >
      <div className="ml-6">
        <Link href="/">
          <button aria-label="Shopping Cart">
            <Image
              src="/images/LogoNObg.png"
              priority={true}
              width={100}
              height={100}
              draggable={false}
              alt="Logo"
            ></Image>
          </button>
        </Link>
      </div>
      {/* Tabs */}
      <ul
        role="list"
        className="mr-14 space-x-16 md:flex md:text-[1.2em] lg:text-[1.3em] xl:text-[1.4em] 2xl:text-[1.5em]"
      >
        {/* Tabs that mark a page */}
        {tabcollection.map((item, index) => (
          <Tab anchor={item.anchor} tabname={item.tabname} key={index} />
        ))}
      </ul>
      </Transition>
    </header>
  );
};

export default Header;
