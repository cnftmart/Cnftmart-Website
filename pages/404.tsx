import Router from "next/router";
import React from "react";
import Image from "next/image";

export default function FourOhFour() {
  const [timer, setTimer] = React.useState<number>(5);

  //Countdown
  React.useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  //Move to the main page
  React.useEffect(() => {
    setTimeout(() => {
      Router.back();
    }, 7000);
  }, []);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center text-[2.5vw] font-bold">
      <Image
        src="/images/404.png"
        fill
        draggable="false"
        alt="404 error"
        className="mt-6 h-[15vw] w-[15vw] "
      />
    </div>
  );
}
