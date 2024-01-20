import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const LeftNav = ({ nav, setNav }) => {
  return (
    <div className="flex items-center">
      <div onClick={() => setNav(!nav)} className="cursor-pointer">
        <AiOutlineMenu size={30} />
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
        Fast <span className="font-bold">Food</span>
      </h1>
      <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
        <p className="bg-black text-white rounded-full p-2">Delivery</p>
        <p className="p-2">Pickup</p>
      </div>
    </div>
  );
};

export default LeftNav;
