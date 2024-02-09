"use client";
import React, { useState } from "react";
import { RxCross2, RxPlus } from "react-icons/rx";

const FaqDropdown = ({ ques, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-4 p-4 border border-gray-300 rounded-2xl w-full">
      <div onClick={() => setIsOpen(!isOpen)} className="mt-1 cursor-pointer">
        {isOpen ? <RxCross2 /> : <RxPlus />}
      </div>
      <div className="flex flex-col gap-4">
        <p
          onClick={() => setIsOpen(!isOpen)}
          className="font-medium cursor-pointer"
        >
          {ques}
        </p>
        {isOpen && <p className="text-xs mb-6">{ans}</p>}
      </div>
    </div>
  );
};

export default FaqDropdown;
