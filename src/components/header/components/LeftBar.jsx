import { React } from "react";
import icons from "./LeftBarConstant";
import { AiOutlineClose } from "react-icons/ai";

const LeftBar = ({ nav, setNav }) => {
  return (
    <>
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Fast <span className="font-bold">Food</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {icons.map((item) => (
              <li key={item.name} className="text-xl py-4 flex ">
                {item.icon}
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default LeftBar;
