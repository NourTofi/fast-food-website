import React from "react";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";
const icons = [
  {
    icon: (
      <TbTruckDelivery
        className="mr-4"
        size={25}
      />
    ),
    name: "Orders",
  },
  {
    icon: (
      <MdFavorite
        className="mr-4"
        size={25}
      />
    ),
    name: "Favorites",
  },
  {
    icon: (
      <FaWallet
        className="mr-4"
        size={25}
      />
    ),
    name: "Wallet",
  },
  {
    icon: (
      <MdHelp
        className="mr-4"
        size={25}
      />
    ),
    name: "Help",
  },
  {
    icon: (
      <AiFillTag
        className="mr-4"
        size={25}
      />
    ),
    name: "Promotions",
  },
  {
    icon: (
      <BsFillSaveFill
        className="mr-4"
        size={25}
      />
    ),
    name: "Best One",
  },
  {
    icon: (
      <FaUserFriends
        className="mr-4"
        size={25}
      />
    ),
    name: "Invite Friends",
  },
];
export default icons;
