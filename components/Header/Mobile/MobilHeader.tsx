import React from "react";
import useOutsideClick from "./Sidebarclose";
import { tabcollection } from "../Tab Collection";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const MobileHeader: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleSidebarButton = () => {
    setOpen((open) => !open);
  };
  const menuRef = React.useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => {
    setOpen(false);
  });
  return (
    <div className="sticky inset-0 z-[100] flex md:hidden">
      <nav
        className={`${
          open
            ? "fixed bottom-0 m-0 h-screen w-[80%] p-5 pt-10"
            : "h-screen w-0"
        } absolute inset-0 pt-5 duration-300`}
        ref={menuRef}
        id="mobileheader"
      >
        <button onClick={handleSidebarButton} aria-label="menu" className="text-white">
          {!open ? (
            <Bars3Icon className="ml-5 h-9 w-9 font-[800] shadow-2xl" />
          ) : (
            <XMarkIcon className="ml-4 h-9 w-9 font-[800] shadow-2xl" />
          )}
        </button>
        <ul
          className={`mt-[8vw] flex flex-col overflow-hidden text-xl font-medium text-white`}
          role="list"
        >
          <li>
            {tabcollection.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <a
                    href={item.anchor}
                    className="mb-2 flex items-center border-none py-2 px-4 text-xl text-[#111218]"
                  >
                    <span className="font-[700]">{item.tabname}</span>
                  </a>
                </React.Fragment>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
