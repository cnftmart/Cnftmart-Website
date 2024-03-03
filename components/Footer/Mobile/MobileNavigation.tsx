import { mobilenavigatiocollection } from "./Mobile Navigation Collection";

const Navigation: React.FC = () => {
  return (
    <div className="flex select-none justify-center space-x-6 sm:space-x-12 md:hidden">
      {mobilenavigatiocollection.map((index) => (
        <div
          className="flex cursor-pointer flex-col gap-4 text-right text-[0.8em]"
          key={index.id}
        >
          <h3 className="cursor-auto text-[0.9em]">{index.label}</h3>
          {index.blank1 === true &&
          index.blank2 === true &&
          index.blank3 === true ? (
            <ul role="list" className="flex flex-col gap-4">
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
            <ul role="list" className="flex flex-col gap-4">
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
  );
};

export default Navigation;
