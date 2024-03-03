type Tabs = {
  anchor: string;
  tabname: string;
};

const Tab: React.FC<Tabs> = ({ anchor, tabname }) => {
  return (
    <a href={anchor}>
      <li className="cursor-pointer transition duration-200 hover:font-bold hover:text-white active:text-[#252627]">
        {tabname}
      </li>
    </a>
  );
};

export default Tab;
