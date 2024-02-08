import React from "react";
import FooterLogo from "../../public/images/TicketeFooterLogo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6">
      <div className="p-28 max-md:pb-10 max-md:pl-0">
        <Image src={FooterLogo} alt="" width={190} height={48} layout="fixed" />
      </div>
      <div className=" border-t w-full border-gray-600"></div>
      <div className="flex flex-wrap-reverse p-2  md:px-28 py-5 max-md:text-xs gap-6">
        <p className="text-[#7D828A]">Made with ❤️</p>
        <ul className=" flex  flex-wrap whitespace-nowrap text-[#ADB1B8] font-semibold list-disc list-inside">
          <li className=" px-2 ">Terms of usage</li>
          <li className="px-2 ">Privacy policy</li>
          <li className="px-2">Cancellation policy</li>
          <li className="px-2">Sitemap</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
