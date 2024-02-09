import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import TicketDetails from "../ticket/ticketdetails";
import UserInfo from "../userinfo/details";
import PaymentBox from "../payment/payment";
import FAQ from "../faq/faq";

function Checkout() {
  return (
    <>
      <main className="mx-28 max-lg:mx-20 max-md:mx-16 max-sm:mx-6 pt-20 max-lg:pt-16 max-md:pt-12">
        <h2 className="text-5xl font-semibold max-lg:mb-8 max-sm:text-4xl font-serif">
          Confirm & pay
        </h2>
        <div className="flex max-lg:flex-col-reverse justify-between gap-6 max-lg:gap-2 border-b border-gray-300">
          <div className="flex-grow">
            <div className="p-4 border-2 rounded-xl my-16 max-lg:my-8 bg-[#fcfcfd]">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Free cancellation</h4>
                <BsInfoCircleFill className="text-[#60646C] text-sm" />
              </div>
              <p className="text-[#60646C] text-sm">
                Tickets can be cancelled by 13th December, 2022.
              </p>
            </div>

            <UserInfo />
            <PaymentBox />
          </div>

          <div className="-mt-10 max-lg:-mt-0">
            <TicketDetails />
          </div>
        </div>
        <FAQ />
      </main>
    </>
  );
}

export default Checkout;
