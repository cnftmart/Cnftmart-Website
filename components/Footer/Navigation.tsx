import { navigatiocollection } from "./Navigation Collection";
import MobileNavigation from "./Mobile/MobileNavigation";

const Navigation: React.FC = () => {
  return (
    <>
      <div className="mr-4 ml-24 hidden w-full max-w-[80%] select-none justify-start space-x-12 md:flex lg:space-x-24 xl:space-x-28 2xl:justify-evenly">
        {navigatiocollection.map((index) => (
          <div
            className="flex cursor-pointer flex-col gap-4 text-right text-[0.9em] lg:text-[1em]"
            key={index.id}
          >
            <h3 className="cursor-auto text-[1em] lg:text-[1.1em]">
              {index.label}
            </h3>
            {index.blank1 === true &&
            index.blank2 === true &&
            index.blank3 === true ? (
              <ul role="list" className="flex flex-col gap-4 break-words">
                <li>
                  <a
                    href={index.hyperef1}
                    target="_blank"
                    rel="noreferrer"
                    className="blurhover text-white"
                    aria-label={index.link1}
                  >
                    {index.link1}
                  </a>
                </li>
                <li>
                  <a
                    href={index.hyperef2}
                    target="_blank"
                    rel="noreferrer"
                    className="blurhover text-white"
                    aria-label={index.link2}
                  >
                    {index.link2}
                  </a>
                </li>
                <li>
                  <a
                    href={index.hyperef3}
                    target="_blank"
                    rel="noreferrer"
                    className="blurhover text-white"
                    aria-label={index.link3}
                  >
                    {index.link3}
                  </a>
                </li>
              </ul>
            ) : (
              <ul role="list" className="flex flex-col gap-4 break-words">
                <li>
                  <a
                    href={index.hyperef1}
                    className="blurhover text-white"
                    aria-label={index.link1}
                  >
                    {index.link1}
                  </a>
                </li>
                <li>
                  <a
                    href={index.hyperef2}
                    className="blurhover text-white"
                    aria-label={index.link2}
                  >
                    {index.link2}
                  </a>
                </li>
                <li>
                  <a
                    href={index.hyperef3}
                    className="blurhover text-white"
                    aria-label={index.link3}
                  >
                    {index.link3}
                  </a>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
      <MobileNavigation />
    </>
  );
};

export default Navigation;
