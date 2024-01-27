import React from "react";
import LeftBar from "./components/LeftBar";
import LeftNav from "./components/LeftNav";
import SearchBox from "./components/SearchBox";
import CardButton from "./components/CardButton";

interface HeaderProps {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ nav, setNav }) => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <LeftNav
        nav={nav}
        setNav={setNav}
      />
      <SearchBox />
      <CardButton />
      <LeftBar
        nav={nav}
        setNav={setNav}
      />
    </div>
  );
};

export default Header;
