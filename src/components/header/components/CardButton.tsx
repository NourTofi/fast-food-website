import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const CardButton = () => {
  return (
    <button className="bg-black text-white md:flex hidden items-center cursor-pointer py-2 rounded-full">
      <BsFillCartFill
        size={20}
        className="mr-2"
      />
      Card
    </button>
  );
};

export default CardButton;
