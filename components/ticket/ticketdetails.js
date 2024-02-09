import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { PiTicketFill } from "react-icons/pi";
import { PiCalendarBlankFill } from "react-icons/pi";
import { HiClock } from "react-icons/hi2";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPlus, FaStar } from "react-icons/fa6";
import { PiPiggyBankFill } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
import { PiLockFill } from "react-icons/pi";
import TicketImage from "../../public/images/TicketImage.jpg";
import Image from "next/image";

const TicketDetails = () => {
  return (
    <div className="carousel-container py-3 w-96 max-lg:w-full text-sm border rounded-xl">
      <div className="h-auto rounded-xl overflow-hidden relative mx-3">
        <Image
          src={TicketImage}
          alt="image"
          height={92}
          width={358}
          className="w-full"
          style={{ objectFit: "contain" }}
        />
        <div className="absolute p-1 rounded-md bg-[#F9F9FBBF] text-[#1C2024] shadow-lg top-2 left-2 flex items-center gap-1">
          <span>
            <FaTrophy />
          </span>
          <span className="text-[12px]">Bestseller</span>
        </div>
        <span className="absolute top-1/2 left-2 translate-y-[-50%] cursor-pointer bg-[#F9F9FBBF] p-2 rounded-full">
          <IoIosArrowBack />
        </span>
        <span className=" absolute  top-1/2 right-2 translate-y-[-50%] cursor-pointer bg-[#F9F9FBBF] p-2 rounded-full ">
          <IoIosArrowForward />
        </span>
      </div>
      <div className="pt-3 px-3">
        <div className="flex items-center gap-1">
          <span>
            <FaStar />
          </span>
          <span className="flex items-center">
            <span>4.9</span>
            <span className="text-[#60646C]">(4.5k)</span>
          </span>
          <span className="text-[#60646C]">category</span>
        </div>
        <p className="text-[#1C2024] py-1 font-semibold">
          Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
        </p>
        <div className="text-[#1C2024] flex flex-col gap-2 font-semibold text-sm py-4">
          <div className="flex items-center gap-2">
            <span>
              <PiTicketFill />
            </span>
            <span>ticket type- variant</span>
          </div>
          <div className="flex  items-start   gap-2">
            <span className="pt-1">
              <PiCalendarBlankFill />
            </span>

            <div className="flex flex-col  ">
              <span>Day, month, date</span>

              <span className="text-[#60646C] text-[10px]">
                Duration: duration
              </span>
            </div>
          </div>

          <div className="flex  items-start   gap-2">
            <span className="pt-1">
              <HiClock />
            </span>

            <div className="flex flex-col  ">
              <span>Time</span>

              <span className="text-[#60646C] text-[10px]">
                Operating hours: time to time
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <BsFillPeopleFill />
            </span>
            <span>5 guests</span>
          </div>
        </div>
      </div>
      <div className="border-dashed border-t border-[#DDDDE3] mx-3"></div>

      <div className="flex justify-between items-center py-3 text-[#60646C] px-3">
        <span className="cursor-pointer underline">View payment summary</span>
        <span className="cursor-pointer">
          <FaPlus />
        </span>
      </div>

      <div className="border-t px-3 pb-3">
        <div className="flex justify-between text-lg py-2">
          <p>Total payable</p>
          <span>$XXX</span>
        </div>
        <p className=" flex gap-1 items-center bg-[#E9F9EE] w-min text-nowrap px-2 text-[#299764] rounded-full text-[12px] ">
          <span className="">
            <PiPiggyBankFill />
          </span>
          <span className="font-medium">You saved price</span>
        </p>
        <p className="pt-4 pb-6 flex items-center gap-2 text-xs">
          <span className="font-medium underline text-[#60646C]">
            You will be charged in AED
          </span>
          <span className="cursor-pointer">
            <CiCircleInfo />
          </span>
        </p>
        <p className="leading-5 text-[12px] text-[#60646C]">
          By clicking &quot;confirm & pay&quot;, you agree to{" "}
          <a className="underline text-[#3A5CCC]" href="#">
            Tickete&apos;s general terms and condition
          </a>{" "}
          and{" "}
          <a className="underline text-[#3A5CCC]" href="#">
            cancellation policy.
          </a>{" "}
        </p>
        <button className=" bg-black text-white font-semibold  p-3 mt-4 rounded-xl w-full flex gap-2 items-center justify-center">
          <span>
            <PiLockFill className="text-xl" />
          </span>
          <span>Confirm & pay</span>
        </button>
      </div>
    </div>
  );
};

export default TicketDetails;
