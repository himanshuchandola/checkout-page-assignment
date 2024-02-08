import React from "react";
import headerlogo from "../../public/images/TicketeLogo.svg";
import { MdLock } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import Timer from "../timer/timer";

const Header = () => {
  return (
    <>
      <header className="flex border items-center justify-between  lg:px-28  md:p-5 p-2 ">
        <div>
          <Image
            src={headerlogo}
            alt=""
            width={127}
            height={32}
            layout="fixed"
          />
          <span className="md:hidden block">
            <FaArrowLeft />
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span>
            <MdLock />
          </span>
          <span className="font-medium">Checkout</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <FiHelpCircle />
          </span>
          <span className="hidden md:block">Help</span>
        </div>
      </header>
      <Timer />
    </>
  );
};

export default Header;
