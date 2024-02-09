import React from "react";
import FaqLogo from "../../public/images/Faq.svg";
import Image from "next/image";
import FaqData from "./faqdata";

const FAQ = () => {
  return (
    <div className="pt-16 pb-6 border-b border-gray-300 mb-16">
      <h3 className="font-semibold text-2xl">Frequently asked questions</h3>
      <p className="text-[#60646C] mt-4 mb-10">
        Here are some of our most asked questions.
      </p>

      <div className="flex justify-between items-start max-lg:flex-col-reverse gap-12">
        <div className="flex justify-between max-sm:gap-2 bg-[#F9F9FB] rounded-2xl p-4 w-2/3 max-lg:w-2/3 max-md:w-full">
          <div className="flex flex-col items-start gap-4">
            <p className="font-medium">
              Still need help?
              <br />
              We're here for you.
            </p>
            <button className="bg-black p-4 max-sm:p-3 rounded-2xl text-white">
              Chat with us
            </button>
          </div>
          <Image
            src={FaqLogo}
            alt="faqlogo"
            className="max-[405px]:w-28s"
            width={144}
            height={105}
          />
        </div>

        <FaqData />
      </div>
    </div>
  );
};

export default FAQ;
