import Image from "next/image";

const Button: React.FC = () => {
  return (
    <a href="#header" className="hidden md:block">
      <button
        id="UpButton"
        aria-label="Up to the top"
        className="fixed bottom-[65px] right-[20px] z-50 bg-white transition duration-200 hover:bg-[#f1f1f1]">
        <div id="home" className="flex justify-center p-3 transition duration-200 hover:brightness-[0.9] lg:p-[15px] xl:p-4">
          <Image
            src="/images/Up.png"
            priority={true}
            width={50}
            height={50}
            draggable={false}
            alt="up.png"/>
        </div>
      </button>
    </a>
  );
};

export default Button;
